import { SliceState } from 'store/calculatorSlice'
import { create, all } from 'mathjs'

const mathjs = create(all, {})

export const calculate = (calculation: string[]): string | false => {
	if(calculation.length < 3) return false
	
	const calc = [ ...calculation ]
	if(!calculation[calculation.length - 1].match(/[0-9.]/g)) {
		calc.pop()
	}

	return `${mathjs.evaluate(calc.join(' '))}`
}

const moveCalculationToHistory = (state: SliceState): void => {
	state.history.push(state.calculation)
	state.calculation = []
	state.nextMoveToHistory = false
}

const Calculator = {
	handleNumber: (state: SliceState, value: string): SliceState => {
		if(state.nextMoveToHistory) {
			moveCalculationToHistory(state)
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
	},

	handleOperator: (state: SliceState, operator: string): SliceState => {
		if(state.nextMoveToHistory) {
			moveCalculationToHistory(state)
		}

		if(state.calculation.length > 1 && !state.calculation[state.calculation.length - 1].match(/[0-9.]/g)) {
			state.calculation.pop()
		}

		state.calculation.push(state.display)
		state.lastKeyOperator = true

		if(operator !== '=') {
			state.calculation.push(operator)
		} else {
			state.nextMoveToHistory = true
		}

		const result = calculate(state.calculation)
		if(result) {
			state.display = result
		}

		return state
	},

	handleFunction: (state: SliceState, operator: string): SliceState => {
		switch(operator) {
			case 'AC':
				state.display = '0'
				state.calculation = []
				break
			case '+/-':
				state.display = mathjs.evaluate('display * -1', state).toString()
				break
		}

		return state
	}
}

const keyTypes = new Map<string, (state: SliceState, value: string) => SliceState>();
['1','2','3','4','5','6','7','8','9','0','.','pi'].forEach(val => keyTypes.set(val, Calculator.handleNumber));
['+','-','/','*','='].forEach(val => keyTypes.set(val, Calculator.handleOperator));
['AC','+/-'].forEach(val => keyTypes.set(val, Calculator.handleFunction))

export const handleKeyPress = (state: SliceState, value: string): SliceState => {
	if(!keyTypes.has(value)) return state

	return keyTypes.get(value)(state, value)
}

export default Calculator

/**
 * Scenarios where the display becomes the history:
 * Equal button is pressed
 * 
 */