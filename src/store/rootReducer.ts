import { combineReducers } from '@reduxjs/toolkit'
import calculatorReducer from './calculatorSlice'

export default combineReducers({
	calculator: calculatorReducer
})