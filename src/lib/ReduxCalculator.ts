import { SliceState } from 'store/calculatorSlice'
import { create, all } from 'mathjs'

class ReduxCalculator {
	private keyTypes = new Map<string, (state: SliceState, value: string) => SliceState>()
	private mathjs = create(all, {})

	constructor() {
		// Binds dispatch methods to each key code
		['1','2','3','4','5','6','7','8','9','0','.','pi'].forEach(val => this.keyTypes.set(val, this.handleNumber.bind(this)));
		['+','-','/','*','='].forEach(val => this.keyTypes.set(val, this.handleOperator.bind(this)));
		['AC','+/-'].forEach(val => this.keyTypes.set(val, this.handleFunction.bind(this)))
	}

	/**
	 * Main interface for calculator. All button presses should be dispatched through this method
	 * @param state Incoming state from redux store
	 * @param value Code of pressed key
	 * @returns SliceState
	 */
	handleKeyPress(state: SliceState, value: string): SliceState {
		if(!this.keyTypes.has(value)) return state

		return this.keyTypes.get(value)(state, value)
	}

	/**
	 * Performs calculation on a string of operands. Evaluates from left to right ignoring precedence.
	 * Returns false if too few operands for a calculation, otherwise the results as a string
	 * If passed an array with an operator as the last element, ignores the last element.
	 * @param calculation String array of operands to be calculated
	 * @returns string | false
	 */
	calculate = (calculation: string[]): string | false => {
		console.log({ calculation })
		if(calculation.length < 3) return false
		
		const calc = [ ...calculation ]
		if(!calculation[calculation.length - 1].match(/[0-9.]/g)) {
			calc.pop()
		}

		// Recursively evaluate left to right
		console.log({ calc, slice: calc.slice(0,3) })
		const result = `${this.mathjs.evaluate(calc.slice(0,3).join(' '))}`
		if(!result) {
			return `${this.mathjs.evaluate(calc.join(' '))}`
		}
		return `${this.mathjs.evaluate([result, ...calc.slice(3)].join(' '))}`
	}

	private handleNumber(state: SliceState, value: string): SliceState {
		if(state.nextMoveToHistory) {
			this.moveCalculationToHistory(state)
		}

		let displayValue = state.display

		if(state.lastKeyOperator) {
			displayValue = '0'
			state.lastKeyOperator = false
		}

		if(value === '.' && displayValue.includes('.')) {
			state.display = displayValue
		} else if(displayValue === '0' && value !== '.') {
			state.display = value
		} else {
			state.display = `${displayValue}${value}`
		}

		return state
	}

	private handleOperator(state: SliceState, operator: string): SliceState {
		if(state.nextMoveToHistory) {
			this.moveCalculationToHistory(state)
		}

		if(state.calculation.length > 1 && !state.calculation[state.calculation.length - 1].match(/[0-9.]/g)) {
			state.calculation.pop()
		}

		state.calculation.push(state.display)
		state.lastKeyOperator = true

		if(operator === '=') {
			state.nextMoveToHistory = true
		} else {
			state.calculation.push(operator)
		}

		const result = this.calculate(state.calculation)
		if(result) {
			state.display = result
		}

		return state
	}

	private handleFunction(state: SliceState, operator: string): SliceState {
		switch(operator) {
			case 'AC':
				state.display = '0'
				state.calculation = []
				break
			case '+/-':
				state.display = this.mathjs.evaluate('display * -1', state).toString()
				break
		}

		return state
	}

	private moveCalculationToHistory(state: SliceState): void {
		state.history.push(state.calculation)
		state.calculation = []
		state.nextMoveToHistory = false
	}
}

export default ReduxCalculator