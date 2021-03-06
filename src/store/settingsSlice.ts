import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum MODES {
	BASIC = 'BASIC', 
	SCIENTIFIC = 'SCIENTIFIC', 
	PROGRAMMER = 'PROGRAMMER'
}

export type SliceState = {
	mode: keyof typeof MODES
}

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		mode: window.localStorage.getItem('MODE') || MODES.BASIC
	} as SliceState,
	reducers: {
		changeMode: {
			reducer: (state, { payload }: PayloadAction<keyof typeof MODES>) => {
				window.localStorage.setItem('MODE', payload)
				state.mode = payload
			},
			prepare: (value: keyof typeof MODES) => ({ payload: value })
		},
	}
})

const { actions, reducer } = settingsSlice

export const { changeMode } = actions
export default reducer