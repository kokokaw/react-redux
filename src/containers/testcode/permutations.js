import React, { Component } from 'react';

class Permutations extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	// value: '12345',
	    	value: [1, 9, 50, 5, 3],
	    	permuations: [],
	    	results: null,
	    }
	}

	componentDidMount = () => {
		this.calcPermutations();
	}

	getPermutations = value => {
		let results = [];
		const type = (typeof value === "object") ? "object" : "string"

		if (value.length === 1) {
			results.push(value);
			return results;
		}
		for (let i = 0; i < value.length; i++) {
			let firstElement = (type === "object") ? [value[i]] : value[i];

			let remainingElement;
			if (type === "object")
				remainingElement = value.slice(0, i).concat(value.slice(i + 1));
			else 
				remainingElement = value.substr(0, i) + value.substr(i + 1);

			let innerPermutations = this.getPermutations(remainingElement);
			for (let j = 0; j < innerPermutations.length; j++) {
				if (type === "object")
					results.push(firstElement.concat(innerPermutations[j]));
				else
					results.push(firstElement + innerPermutations[j]);
			}
		}
		return results;
	}

	calcPermutations = () => {
		const permuations = this.getPermutations(this.state.value);
		let results = 0;
		for (let value of permuations) {
			let nValue = (typeof value === "object") ? parseInt(value.join(""), 0) : parseInt(value, 0);
			if (nValue > results)
				results = nValue;
		}

		this.setState({ permuations, results });
	}

	render = () => {
		const { value, results } = this.state;

		return (
			<div>
				Inputs: {value.toString()} <br /><br />
	    		<b>Result :</b> {results}
			</div>
		);
	}
};

export default Permutations;
