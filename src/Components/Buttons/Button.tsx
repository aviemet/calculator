import styled from 'styled-components'

const Button = styled.button<{ rows: number, cols: number }>`
	padding: 0.25rem;
	display: inline-block;
	border: 1px solid #999;
	background: #CCC;
	${({ rows }) => rows && ` grid-row: span ${rows}; `}
	${({ cols }) => cols && ` grid-column: span ${cols}; `}

	&:focus {
		outline: none;
	}

	&:hover {
		background: #AAA;
	}
`

export default Button
