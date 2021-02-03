import { SliceState } from 'store/calculatorSlice'
import ReduxCalculator from 'lib/ReduxCalculator'

const calculator = new ReduxCalculator()
let state: SliceState

beforeEach(() => {
	state = {
		display: '0',
		calculation: [],
		history: []
	}
})

describe('ReduxCalculator.calculate', () => {
	it('handles arithmetic with 2 operands', () => {
		expect(ReduxCalculator.calculate(['8','+','2'])).toBe('10')
		expect(ReduxCalculator.calculate(['8','-','2'])).toBe('6')
		expect(ReduxCalculator.calculate(['8','*','2'])).toBe('16')
		expect(ReduxCalculator.calculate(['8','/','2'])).toBe('4')
	})

	it('handles arithmetic with 3 operands', () => {
		expect(ReduxCalculator.calculate(['8','+','2','-','4'])).toBe('6')
		expect(ReduxCalculator.calculate(['8','-','2','-','4'])).toBe('2')
		expect(ReduxCalculator.calculate(['8','*','2','-','4'])).toBe('12')
		expect(ReduxCalculator.calculate(['8','/','2','-','4'])).toBe('0')
	})

	it('evalutes left to right ignoring precedence', () => {
		expect(ReduxCalculator.calculate(['8','+','2','*','4'])).toBe('40')
	})

	it('returns false with invalid input', () => {
		expect(ReduxCalculator.calculate(['8'])).toBe(false)
		expect(ReduxCalculator.calculate(['8','+'])).toBe(false)
	})
})

describe('ReduxCalculator.handleKeyPress', () => {
	it('builds numbers properly', () => {
		['0','0','3','9','.','4','.','.','4'].forEach(num => state = calculator.handleKeyPress(state, num))
		expect(state.display).toBe('39.44')
	})

	it('performs calculation when using "="', () => {
		['5','+','1','='].forEach(num => state = calculator.handleKeyPress(state, num))
		expect(state).toMatchObject({
			display: '6',
			calculation: ['5','+','1'],
			history: [['5','+','1']]
		})
	})

	it('performs calculation when using an operator', () => {
		['5','+','1','*'].forEach(num => state = calculator.handleKeyPress(state, num))
		expect(state).toMatchObject({
			display: '6',
			calculation: ['5','+','1', '*'],
			history: []
		})
	})

	it('properly chains calculations', () => {
		['1','0','.','+','5','/','5','=','-','6','='].forEach(num => state = calculator.handleKeyPress(state, num))
		expect(state).toEqual({
			display: '-3',
			calculation: ['3','-','6'],
			history: [['10','+','5','/','5'], ['3','-','6']]
		})
	})
})
