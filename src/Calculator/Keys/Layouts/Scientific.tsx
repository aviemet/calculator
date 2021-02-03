import Buttons from 'Components/Buttons'
import KeyContainer from 'Components/KeyContainer'

const Scientific: React.FC = () => {
	return (
		<KeyContainer cols={ 10 } rows={ 5 }>
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

export default Scientific
