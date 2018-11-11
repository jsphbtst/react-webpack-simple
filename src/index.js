import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

const App = () => {
	return(
		<div className="App">
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
					<button className="btn" 
						onClick={() => {
							document.body.style.backgroundColor = '#ed6a5a';
						}}>
						ed6a5a
					</button>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
					<button className="btn" 
						onClick={() => {
							document.body.style.backgroundColor = '#fbfffe';
						}}>
						fbfffe
					</button>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
					<button className="btn" 
						onClick={() => {
							document.body.style.backgroundColor = '#f6a90a';
						}}>
						f6a90a
					</button>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
					<button className="btn" 
						onClick={() => {
							document.body.style.backgroundColor = '#9bc1bc';
						}}>
						9bc1bc
					</button>
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);