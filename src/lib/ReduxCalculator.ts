import { SliceState } from 'store/calculatorSlice'
import { create, all } from 'mathjs'

const isNumberString = (str: string) => {
	return RegExp(/[0-9.]/).exec(str) !== null
}

class ReduxCalculator {
	static mathjs = create(all, {})

	private keyMap = new Map<string, (state: SliceState, value: string) => SliceState>()
	private lastKeyOperator = false
	private lastKeyEquals = false

	constructor() {
		// Binds dispatch methods to each key code
		['1','2','3','4','5','6','7','8','9','0','.','pi'].forEach(val => this.keyMap.set(val, this.handleNumber.bind(this)));
		['+','-','/','*'].forEach(val => this.keyMap.set(val, this.handleOperator.bind(this)));
		['AC','+/-'].forEach(val => this.keyMap.set(val, this.handleFunction.bind(this)))
		this.keyMap.set('=', this.handleEquals.bind(this))
	}

	/**
	 * Main interface for calculator. All button presses should be dispatched through this method
	 * @param state Incoming state from redux store
	 * @param value Code of pressed key
	 * @returns SliceState
	 */
	handleKeyPress(state: SliceState, value: string): SliceState {
		if(!this.keyMap.has(value)) return state
		
		return this.keyMap.get(value)(state, value)
	}

	/**
	 * Performs calculation on a string of operands. Evaluates from left to right ignoring precedence.
	 * Returns false if too few operands for a calculation, otherwise the results as a string
	 * If passed an array with an operator as the last element, ignores the last element.
	 * @param calculation String array of operands to be calculated
	 * @returns string | false
	 */
	static calculate = (calculation: string[]): string | false => {
		if(calculation.length < 3) return false
		

		const calc = calculation.reduce((accumulator, val, i, arr) => {
			// Look ahead for a % sign and divide previous operand by 100
			if(arr.length > i + 1 && arr[i + 1] === '%') {
				console.log({ i, val, product: accumulator.concat(`${ReduxCalculator.mathjs.evaluate(`${val} / 100`)}`) })
				return accumulator.concat(`${ReduxCalculator.mathjs.evaluate(`${val} / 100`)}`)
			}
			if(val === '%') return accumulator.concat('*')

			// ignore last element if it's not a number
			if(i === arr.length - 1 && !isNumberString(val)) {
				return accumulator
			}

			return accumulator.concat(val)
		}, [] as string[])

		// Recursively evaluate left to right
		const result = `${ReduxCalculator.mathjs.evaluate(calc.slice(0,3).join(' '))}`
		if(!result) {
			return `${ReduxCalculator.mathjs.evaluate(calc.join(' '))}`
		}
		return `${ReduxCalculator.mathjs.evaluate([result, ...calc.slice(3)].join(' '))}`
	}

	/**
	 * When a number is pressed:
	 * if the last key pressed was an operator
	 * 	push the display value onto the calculation array
	 * 	set the dispaly value to the pressed value key
	 * otherwise
	 * 	continue building the number
	 */
	private handleNumber(state: SliceState, value: string): SliceState {
		let displayValue = state.display

		if(this.lastKeyOperator) {
			displayValue = '0'
		} else if(this.lastKeyEquals) {
			displayValue = '0'
			state.calculation = []
		}
		this.lastKeyEquals = false
		this.lastKeyOperator = false

		if(value === '.' && displayValue.includes('.')) {
			state.display = displayValue
		} else if(displayValue === '0' && value !== '.') {
			state.display = value
		} else {
			state.display = `${displayValue}${value}`
		}

		return state
	}

	/**
	 * When an operator is pressed:
	 * if the last key pressed was an operator
	 * 	replace the last element in the calculation array
	 * otherwise
	 * 	push display onto calculation array
	 *  push the operator onto the calculation array
	 * 	attempt to calculate the calculation array
	 */
	private handleOperator(state: SliceState, operator: string): SliceState {
		if(this.lastKeyOperator) {
			state.calculation[state.calculation.length - 1] = operator
		} else if(this.lastKeyEquals) {
			state.calculation = []
		}
		this.lastKeyEquals = false

		state.display = this.trimNumber(state.display)
		state.calculation.push(state.display)
		state.calculation.push(operator)
		this.lastKeyOperator = true

		const result = ReduxCalculator.calculate(state.calculation)
		if(result) {
			state.display = result
		}

		return state
	}

	/**
	 * When equals is pressed:
	 * if the last key pressed was a number
	 * 	push the display to the calculation array
	 * 	attempt to calculate the calculation array
	 * otherwise
	 * 	
	 */
	private handleEquals(state: SliceState, operator: string): SliceState {
		state.calculation.push(this.trimNumber(state.display))

		const result = ReduxCalculator.calculate(state.calculation)
		if(result) {
			state.display = result
			state.history.push(state.calculation)
		}

		this.lastKeyEquals = true

		return state
	}

	private handleFunction(state: SliceState, operator: string): SliceState {
		switch(operator) {
			case 'AC':
				state.display = '0'
				state.calculation = []
				this.lastKeyOperator = true
				break
			case '+/-':
				state.display = ReduxCalculator.mathjs.evaluate('display * -1', state).toString()
				break
		}

		return state
	}

	private trimNumber(number: string) {
		return parseFloat(number).toString()
	}
}

export default ReduxCalculator
