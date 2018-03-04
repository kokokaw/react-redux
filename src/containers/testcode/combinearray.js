import React, { Component } from 'react';

class CombineArray extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	array1: [1, 3, 5, 7],
	    	array2: [2, 4, 6, 8],
	    	results: [],
	    }
	}

	componentDidMount = () => {
		this.calcCombineArray();
	}

	calcCombineArray = () => {
		const { array1, array2 } = this.state;
		let mLength = (array1.length > array2.length) ? array1.length : array2.length;
		let results = [];
		for (let i = 0; i < mLength; i++) {
			if (array1[i])
				results.push(array1[i]);
			if (array2[i])
				results.push(array2[i]);
		}

		this.setState({ results });
	}

	render = () => {
		const { array1, array2, results } = this.state;

		return (
			<div>
				Inputs: {array1.toString()} and {array2.toString()} <br /><br />
	    		<b>Result :</b> {results.toString()}
			</div>
		);
	}
};

export default CombineArray;
