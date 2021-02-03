import { createSlice } from '@reduxjs/toolkit'
import ReduxCalculator from 'lib/ReduxCalculator'

export type SliceState = {
	display:string
	calculation: string[]
	history:string[][]
}

const calculator = new ReduxCalculator()

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		display: '0',
		calculation: [],
		history: []
	} as SliceState,
	reducers: {
		keyPress: {
			reducer: (state, { payload }: Record<string, string>) => {
				state = calculator.handleKeyPress(state, payload)
			},
			prepare: (value: string) => ({ payload: value })
		},
	}
})

const { actions, reducer } = calculatorSlice

export const { keyPress } = actions
export default reducer