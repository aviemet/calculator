import Buttons from 'Components/Buttons'
import KeyContainer from 'Components/KeyContainer'

const Basic: React.FC = () => {
	return (
		<KeyContainer cols={ 4 } rows={ 5 } width={ 250 }>
			<Buttons.AC />
			<Buttons.Sign />
			<Buttons.Percent />
			<Buttons.Divide />

			<Buttons.Seven />
			<Buttons.Eight />
			<Buttons.Nine />
			<Buttons.Multiply />

			<Buttons.Four />
			<Buttons.Five />
			<Buttons.Six />
			<Buttons.Subtract />

			<Buttons.One />
			<Buttons.Two />
			<Buttons.Three />
			<Buttons.Add />

			<Buttons.Zero cols={ 2 } />
			<Buttons.Dot />
			<Buttons.Equals />
		</KeyContainer>
	)
}

export default Basic
