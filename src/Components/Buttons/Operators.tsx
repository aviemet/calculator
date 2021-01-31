import React from 'react'
import Operator from './Operator'

const Operators = {
	AC: props => <Operator value="AC" { ...props } />,
	Sign: props => <Operator value="+/-" { ...props } />,
	Percent: props => <Operator value="%" { ...props } />,
	Divide: props => <Operator value="/" display="&divide;" { ...props } />,
	Multiply: props => <Operator value="X" { ...props } />,
	Subtract: props => <Operator value="-" { ...props } />,
	Add: props => <Operator value="+" { ...props } />,
	Equals: props => <Operator value="=" { ...props } />
}

export default Operators
