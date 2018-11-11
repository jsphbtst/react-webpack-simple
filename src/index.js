import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: ''
		}
	}

	render() {
		return(
			<div className="App">
				<button onClick={() => console.log("CLICK")}>CLICK ME</button>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);