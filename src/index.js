import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: ''
		};
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor(color) {
		this.setState({ color: color }, () => {
			document.body.style.backgroundColor = this.state.color;
		});
	}

	render() {
		return(
			<div className="App">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-2">
						<button className="btn" 
							onClick={() => this.changeColor('#ed6a5a')}>
							ed6a5a
						</button>
					</div>
					<div className="col-md-2">
						<button className="btn" 
							onClick={() => this.changeColor('#fbfffe')}>
							fbfffe
						</button>
					</div>
					<div className="col-md-2">
						<button className="btn" 
							onClick={() => this.changeColor('#f4f1bb')}>
							f4f1bb
						</button>
					</div>
					<div className="col-md-2">
						<button className="btn" 
							onClick={() => this.changeColor('#f6a90a')}>
							f6a90a
						</button>
					</div>
					<div className="col-md-2">
						<button className="btn" 
							onClick={() => this.changeColor('#9bc1bc')}>
							9bc1bc
						</button>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);