import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';

class About extends Component {
	render = () => {
		const { count } = this.props.counter;
		return (
    		<Card title="About Us">
				<div>
					<p>Did you get here via Redux?</p>
					<p>Count: {count}</p>
				</div>
			</Card>
		);
	}
};

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps)(About);
