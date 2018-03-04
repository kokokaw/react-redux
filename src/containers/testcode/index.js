import React, { Component } from 'react';

import Fibonacci from './fibonacci';
import Sum from './sum';
import Permutations from './permutations';
import CombineArray from './combinearray';

import { Card, Collapse } from 'antd';
const Panel = Collapse.Panel;

class TestCode extends Component {
	constructor(props) {
		super(props);
		console.log('asdf');
	    this.state = {
	      key: "1",
	    }
	}

	callback = key => {
		console.log(key);
		this.setState({ key: key.toString() });
	}

	render() {
		const { key } = this.state;
		return (
			<Card title="Test Code">
				<Collapse activeKey={key} accordion onChange={this.callback}>
					<Panel header="Fibonacci" key="1">
						<Fibonacci />
					</Panel>
					<Panel header="Sum of all unique numbers" key="2">
						<Sum />
					</Panel>
					<Panel header="Bigger Value of Permutation" key="3">
						<Permutations />
					</Panel>
					<Panel header="Combine 2 Array" key="4">
						<CombineArray />
					</Panel>
				</Collapse>
			</Card>
		);
	}
};

export default TestCode;

