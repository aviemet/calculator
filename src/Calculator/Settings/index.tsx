import React from 'react'
import ModeSelect from './ModeSelect'
import styled from 'styled-components'

const Settings = () => {
	return (
		<SettingsContainer>
			<ModeSelect name="mode" value="basic" />
			<ModeSelect name="mode" value="scientific" />
			<ModeSelect name="mode" value="programmer" />
		</SettingsContainer>
	)
}

const SettingsContainer = styled.div`
	background: #666;
	padding: 5px;
`

export default Settings
