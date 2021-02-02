import { createSlice } from '@reduxjs/toolkit'
import { handleKeyPress } from 'lib/calculator'

export type SliceState = {
	display:string
	calculation: string[]
	lastKeyOperator: boolean
	nextMoveToHistory: boolean
	history:string[][]
}

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		display: '0',
		calculation: [],
		lastKeyOperator: false,
		nextMoveToHistory: false,
		history: []
	} as SliceState,
	reducers: {
		keyPress: {
			reducer: (state, { payload }: Record<string, string>) => {
				state = handleKeyPress(state, payload)
			},
			prepare: (value: string) => ({ payload: value })

		},
	}
})

const { actions, reducer } = calculatorSlice

export const { keyPress } = actions
export default reducer