import React, { Component } from 'react';

class Sum extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	value: [1, 1, 2, 2, 4, 5, '1', 'b', 3, 9, '8', 8, 7],
	    	uniqueValue: [],
	    	results: {
	    		all: null,
	    		odd: null,
	    		even: null
	    	},
	    }
	}

	componentDidMount = () => {
		this.calcSum();
	}

	unique = value => {
		let declared = {};
		return value.filter((val) => {
			if (declared[val] || typeof val !== "number") 
				return

			declared[val] = true;
			return val;
		});
	}

	calcSum = () => {
		const uniqueValue = this.unique(this.state.value);

		let all = 0, odd = 0, even = 0;
		for (let value of uniqueValue) {
			all += value;
			if (value % 2 !== 0)
				odd += value;
			else
				even += value;
		}

		this.setState({ uniqueValue, results: { all, odd, even } });
	}

	render = () => {
		const { value, uniqueValue, results } = this.state;

		return (
			<div>
				<b>Inputs :</b> from {value.toString()} to {uniqueValue.toString()} <br /><br />
	    		<b>All :</b>{results.all}<br />
	    		<b>Odd :</b>{results.odd}<br />
	    		<b>Even :</b>{results.even}
			</div>
		);
	}
};

export default Sum;
