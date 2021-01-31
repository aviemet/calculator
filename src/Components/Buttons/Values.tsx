import React from 'react'
import Value from './Value'

const Values = {
	One: props => <Value value={ 1 } { ...props } />,
	Two: props => <Value value={ 2 } { ...props } />,
	Three: props => <Value value={ 3 } { ...props } />,
	Four: props => <Value value={ 4 } { ...props } />,
	Five: props => <Value value={ 5 } { ...props } />,
	Six: props => <Value value={ 6 } { ...props } />,
	Seven: props => <Value value={ 7 } { ...props } />,
	Eight: props => <Value value={ 8 } { ...props } />,
	Nine: props => <Value value={ 9 } { ...props } />,
	Zero: props => <Value value={ 0 } { ...props } />,
	Dot: props => <Value value='.' { ...props }  />,
	Pi: props => <Value value={ Math.PI } display='&Pi;' { ...props } />
}

export default Values
