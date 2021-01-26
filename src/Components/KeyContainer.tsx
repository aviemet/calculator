import styled from 'styled-components'

interface KeyContainerProps {
	cols: number,
	rows: number,
	width: number
}

const KeyContainer = styled.div<KeyContainerProps>`
	width: ${ (props) => props.width }px;
	display: grid;
	grid-template-columns: repeat(${ (props) => props.cols }, ${ (props) => props.width / props.cols }px);
	grid-template-rows: repeat(${ (props) => props.rows }, ${ (props) => props.width / props.cols }px);
`

export default KeyContainer