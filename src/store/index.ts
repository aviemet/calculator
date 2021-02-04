import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
export { MODES } from './settingsSlice'

export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({
	reducer: rootReducer
})

export default store