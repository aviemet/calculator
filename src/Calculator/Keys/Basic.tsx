import { Value, Operator } from 'Components/Buttons'
import KeyContainer from 'Components/KeyContainer'

const Basic: React.FC = () => {
	return (
		<KeyContainer cols={ 4 } rows={ 5 } width={ 250 }>
			<Operator value="AC" />
			<Operator value="+/-" />
			<Operator value="%" />
			<Operator value="/" display="&divide;" />

			<Value value={ 7 } />
			<Value value={ 8 } />
			<Value value={ 9 } />
			<Operator value="X" />

			<Value value={ 4 } />
			<Value value={ 5 } />
			<Value value={ 6 } />
			<Operator value="-" />

			<Value value={ 1 } />
			<Value value={ 2 } />
			<Value value={ 3 } />
			<Operator value="+" />

			<Value value={ 0 } cols={ 2 } />
			<Value value="." />
			<Operator value="=" />
		</KeyContainer>
	)
}

export default Basic
