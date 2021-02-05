import React from 'react'
import Button from './Button'

export default {
	One:         props => <Button value={ 1 } keypress="1" { ...props } />,
	Two:         props => <Button value={ 2 } keypress="2" { ...props } />,
	Three:       props => <Button value={ 3 } keypress="3" { ...props } />,
	Four:        props => <Button value={ 4 } keypress="4" { ...props } />,
	Five:        props => <Button value={ 5 } keypress="5" { ...props } />,
	Six:         props => <Button value={ 6 } keypress="6" { ...props } />,
	Seven:       props => <Button value={ 7 } keypress="7" { ...props } />,
	Eight:       props => <Button value={ 8 } keypress="8" { ...props } />,
	Nine:        props => <Button value={ 9 } keypress="9" { ...props } />,
	Zero:        props => <Button value={ 0 } keypress="0" { ...props } />,
	Dot:         props => <Button value='.' keypress="." { ...props }  />,
	Pi:          props => <Button value='pi' display='&Pi;' { ...props } />,
	E:           props => <Button value='e' { ...props } />,
   
	Divide:      props => <Button value="/" display="&divide;" keypress="/" { ...props } />,
	Multiply:    props => <Button value="*" display="X" keypress="*" { ...props } />,
	Subtract:    props => <Button value="-" keypress="-" { ...props } />,
	Add:         props => <Button value="+" keypress="+" { ...props } />,
	Percent:     props => <Button value="%" { ...props } />,
	Equals:      props => <Button value="=" keypress="Enter" { ...props } />,
   
	AC:          props => <Button value="AC" keypress="Escape" { ...props } />,
	Sign:        props => <Button value="+/-" { ...props } />,
   
	OpenParens:  props => <Button value="(" keypress="(" { ...props } />,
	CloseParens: props => <Button value=")" keypress=")" { ...props } />,
	MemAdd:      props => <Button value="M+" { ...props } />,
	MemSub:      props => <Button value="M-" { ...props } />,
	MemRecall:   props => <Button value="MR" { ...props } />,
	MemClear:    props => <Button value="MC" { ...props } />,
	Pow:         props => <Button value="x^y" { ...props } />,
	Square:      props => <Button value="x^2" { ...props } />,
	Abs:         props => <Button value="absolute" display="|x|" { ...props } />,
	Root:        props => <Button value="root" display="√" { ...props } />,
	NRoot:       props => <Button value="nroot" display="n√" { ...props } />,
	Log:         props => <Button value="log" { ...props } />,
	Lten:        props => <Button value="lten" { ...props } />,
	Ln:          props => <Button value="ln" { ...props } />,

	Sin:         props => <Button value="sin" { ...props } />,
	Cos:         props => <Button value="cos" { ...props } />,
	Tan:         props => <Button value="tan" { ...props } />,
	Csc:         props => <Button value="csc" { ...props } />,
	Sec:         props => <Button value="sec" { ...props } />,
	Cot:         props => <Button value="cot" { ...props } />,
}