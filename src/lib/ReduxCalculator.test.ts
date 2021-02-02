import { SliceState } from 'store/calculatorSlice'
import ReduxCalculator from 'lib/ReduxCalculator'

const calculator = new ReduxCalculator()
let state: SliceState

beforeEach(() => {
	state = {
		display: '0',
		calculation: [],
		lastKeyOperator: false,
		nextMoveToHistory: false,
		history: []
	}
})

describe('ReduxCalculator.calculate', () => {
	it('handles arithmetic with 2 operands', () => {
		expect(calculator.calculate(['8','+','2'])).toBe('10')
		expect(calculator.calculate(['8','-','2'])).toBe('6')
		expect(calculator.calculate(['8','*','2'])).toBe('16')
		expect(calculator.calculate(['8','/','2'])).toBe('4')
	})

	it('handles arithmetic with 3 operands', () => {
		expect(calculator.calculate(['8','+','2','-','4'])).toBe('6')
		expect(calculator.calculate(['8','-','2','-','4'])).toBe('2')
		expect(calculator.calculate(['8','*','2','-','4'])).toBe('12')
		expect(calculator.calculate(['8','/','2','-','4'])).toBe('0')
	})

	it('evalutes left to right ignoring precedence', () => {
		expect(calculator.calculate(['8','+','2','*','4'])).toBe('40')
	})

	it('returns false with invalid input', () => {
		expect(calculator.calculate(['8'])).toBe(false)
		expect(calculator.calculate(['8','+'])).toBe(false)
	})
})

describe('ReduxCalculator.handleKeyPress', () => {	
	it('builds numbers properly', () => {
		['0','0','3','9','.','4','.','.','4'].forEach(num => state = calculator.handleKeyPress(state, num))
		expect(state.display).toBe('39.44')
	})
	it('chains arithmetic properly', () => {
		['1','0','+','5','/','5','='].forEach(num => state = calculator.handleKeyPress(state, num))
		expect(state).toBe({
			display: '3',
			calculation: ['10','+','5','/','5'],
			lastKeyOperator: true,
			nextMoveToHistory: true,
			history: []
		})
	})
})