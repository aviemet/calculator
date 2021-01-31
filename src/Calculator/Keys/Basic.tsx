import { Values, Operators } from 'Components/Buttons'
import KeyContainer from 'Components/KeyContainer'

const Basic: React.FC = () => {
	return (
		<KeyContainer cols={ 4 } rows={ 5 } width={ 250 }>
			<Operators.AC />
			<Operators.Sign />
			<Operators.Percent />
			<Operators.Divide />

			<Values.Seven />
			<Values.Eight />
			<Values.Nine />
			<Operators.Multiply />

			<Values.Four />
			<Values.Five />
			<Values.Six />
			<Operators.Subtract />

			<Values.One />
			<Values.Two />
			<Values.Three />
			<Operators.Add />

			<Values.Zero cols={ 2 } />
			<Values.Dot />
			<Operators.Equals />
		</KeyContainer>
	)
}

export default Basic
