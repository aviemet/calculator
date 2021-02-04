import React from 'react'
import styled from 'styled-components'

interface ModeProps {
	name: string,
	value: string
}

const ModeSelect: React.FC<ModeProps> = ({ name, value }) => {
	return (
		<RadioSelect>
			<input type="radio" name={ name } id={ value } value={ value } />	
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
