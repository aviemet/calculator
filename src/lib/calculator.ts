const testNumbers = /[0-9.]/g

const Calculator = {
	inputNumber: (display: string, value: string) => {
		if(!value.match(testNumbers)) return display

		if((value === '0' && display === '0') || value === '.' && display.includes('.')) {
			return display
		}

		if(display === '0') {
			return value
		}

		return `${display}${value}`
	}
}

export default Calculator