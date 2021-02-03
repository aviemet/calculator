import styled from 'styled-components'

interface KeyContainerProps {
	cols: number,
	rows: number,
	buttonWidth?: number
}

const KeyContainer = styled.div<KeyContainerProps>`
	width: ${ (props) => props.buttonWidth * props.cols }px;
	display: grid;
	grid-template-columns: repeat(${ (props) => props.cols }, ${ (props) => props.buttonWidth }px);
	grid-template-rows: repeat(${ (props) => props.rows }, ${ (props) => props.buttonWidth }px);
`

KeyContainer.defaultProps = {
	buttonWidth: 60
}

export default KeyContainer
