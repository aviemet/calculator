import { combineReducers } from '@reduxjs/toolkit'
import calculatorReducer from './calculatorSlice'
import settingsReducer from './settingsSlice'

export default combineReducers({
	calculator: calculatorReducer,
	settings: settingsReducer
})