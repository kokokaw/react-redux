import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Menu } from 'antd';

import Home from '../home';
import About from '../about';
import TestCode from '../testcode';

const App = props => {
	const { router } = props;
	return(
		<div>
			<header>
				<Menu
				selectedKeys={[router.location.pathname]}
				mode="horizontal"
				>
					<Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
					<Menu.Item key="/about-us"><Link to="/about-us">About</Link></Menu.Item>
					<Menu.Item key="/test-code"><Link to="/test-code">Test Code</Link></Menu.Item>
				</Menu>
			</header>

			<main>
				<Route exact path="/" component={Home} />
				<Route exact path="/about-us" component={About} />
				<Route exact path="/test-code" component={TestCode} />
			</main>
		</div>
	);
};

const mapStateToProps = state => ({
	router: state.router
});
export default connect(mapStateToProps)(App);

