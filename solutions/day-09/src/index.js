import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		const month = (new Date()).getMonth();
		let color = '';
		let season = '';

		if (month >= 2 && month < 5)  {
			color = 'green';
			season = 'Spring';
		} else if (month >= 5 && month < 8) {
			color = 'yellow';
			season = 'Summer';
		} else if (month >= 8 && month < 12) {
			color = 'orange';
			season = 'Fall';
		} else {
			color = 'light blue';
			season = 'Winter';
		}

		return (
			<div style={{textAlign: 'center'}}>
				<h1>Welcome to 30 Days Of React</h1>
				<h3>Conditional Rendering</h3>
				<div style={{backgroundColor: color, height: '100px', paddingTop: 40}}><span>{season}</span></div>
			</div>
		)
	}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
