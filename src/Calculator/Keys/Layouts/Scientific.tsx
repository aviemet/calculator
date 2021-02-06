import Buttons from 'Components/Buttons'
import KeyContainer from 'Components/KeyContainer'

const Scientific: React.FC = () => {
	return (
		<KeyContainer cols={ 10 } rows={ 5 }>
			<Buttons.MemClear />
			<Buttons.MemAdd />
			<Buttons.MemSub />
			<Buttons.MemRecall />
			<Buttons.AC />
			<Buttons.C cols={ 2 } />
			<Buttons.Sign />
			<Buttons.Percent />
			<Buttons.Divide />

			<Buttons.TwoPow />
			<Buttons.Square />
			<Buttons.Cube />
			<Buttons.Pow />
			<Buttons.EPow />
			<Buttons.TenPow />
			<Buttons.Seven />
			<Buttons.Eight />
			<Buttons.Nine />
			<Buttons.Multiply />

			<Buttons.Invert />
			<Buttons.Root />
			<Buttons.CubeRoot />
			<Buttons.XRoot />
			<Buttons.Ln />
			<Buttons.LTen />
			<Buttons.Four />
			<Buttons.Five />
			<Buttons.Six />
			<Buttons.Subtract />

			<Buttons.Factorial />
			<Buttons.Sin />
			<Buttons.Cos />
			<Buttons.Tan />
			<Buttons.E />
			<Buttons.Pi />
			<Buttons.One />
			<Buttons.Two />
			<Buttons.Three />
			<Buttons.Add />

			<Buttons.Empty />
			<Buttons.Csc />
			<Buttons.Sec />
			<Buttons.Cot />
			<Buttons.OpenParens />
			<Buttons.CloseParens />
			<Buttons.Zero cols={ 2 } />
			<Buttons.Dot />
			<Buttons.Equals />
		</KeyContainer>
	)
}

export default Scientific
