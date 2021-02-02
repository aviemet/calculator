import React from 'react'
import Button from './Button'

export default {
	One:      props => <Button value={ 1 } keypress="1" { ...props } />,
	Two:      props => <Button value={ 2 } keypress="2" { ...props } />,
	Three:    props => <Button value={ 3 } keypress="3" { ...props } />,
	Four:     props => <Button value={ 4 } keypress="4" { ...props } />,
	Five:     props => <Button value={ 5 } keypress="5" { ...props } />,
	Six:      props => <Button value={ 6 } keypress="6" { ...props } />,
	Seven:    props => <Button value={ 7 } keypress="7" { ...props } />,
	Eight:    props => <Button value={ 8 } keypress="8" { ...props } />,
	Nine:     props => <Button value={ 9 } keypress="9" { ...props } />,
	Zero:     props => <Button value={ 0 } keypress="0" { ...props } />,
	Dot:      props => <Button value='.' keypress="." { ...props }  />,
	Pi:       props => <Button value='pi' display='&Pi;' { ...props } />,

	Divide:   props => <Button value="/" display="&divide;" keypress="/" { ...props } />,
	Multiply: props => <Button value="*" display="X" keypress="*" { ...props } />,
	Subtract: props => <Button value="-" keypress="-" { ...props } />,
	Add:      props => <Button value="+" keypress="+" { ...props } />,
	Percent:  props => <Button value="%" { ...props } />,
	Equals:   props => <Button value="=" keypress="Enter" { ...props } />,

	AC:       props => <Button value="AC" keypress="Escape" { ...props } />,
	Sign:     props => <Button value="+/-" { ...props } />
}
