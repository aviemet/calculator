import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'store'
import { MODES, changeMode } from 'store/settingsSlice'
import styled from 'styled-components'

interface ModeProps {
	value: keyof typeof MODES
}

const ModeSelect: React.FC<ModeProps> = ({ value }) => {
	const { mode } = useSelector((state: RootState) => state.settings)
	const dispatch = useDispatch()
	
	const handleSelect = () => {
		dispatch(changeMode(value))
	}

	return (
		<RadioSelect>
			<input 
				type="radio"
				name="mode" 
				id={ value } 
				value={ value } 
				defaultChecked={ value === mode }
				onChange={ handleSelect }
			/>	
			<label htmlFor={ value }>{ value }</label>
		</RadioSelect>
	)
}

const RadioSelect = styled.div`
	display: inline-block;
	padding: 5px;

	label {
		text-transform: uppercase;
	}
`

export default ModeSelect
