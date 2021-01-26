import { createSlice } from '@reduxjs/toolkit'

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		display: '0'
	},
	reducers: {
		pressValue: {
			reducer: (state, { payload }: Record<string, string | number>) => {
				state.display = `${state.display}${payload}`
			},
			prepare: (value: string | number) => ({ payload: value })
		},
		pressOperator:  {
			reducer: (state, { payload }: Record<string, string>) => {
				state.display = `${state.display}${payload}`
			},
			prepare: (value: string) => ({ payload: value })
		}
	}
})

const { actions, reducer } = calculatorSlice

export const { pressValue, pressOperator } = actions
export default reducer