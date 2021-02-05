import React from 'react'
import { MODES } from 'store/settingsSlice'
import ModeSelect from './ModeSelect'
import styled from 'styled-components'

const Settings = () => {
	return (
		<SettingsContainer>
			<ModeSelect value={ MODES.BASIC } />
			<ModeSelect value={ MODES.SCIENTIFIC } />
			<ModeSelect value={ MODES.PROGRAMMER } />
		</SettingsContainer>
	)
}

const SettingsContainer = styled.div`
	background: #666;
	padding: 5px;
`

export default Settings
