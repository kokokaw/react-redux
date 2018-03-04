import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

import { Card, Button } from 'antd';

const Home = props => (
  <div>
    <Card title="Home">
      <p>Count: {props.count}</p>

      <div>
        <Button.Group>
          <Button type="primary" onClick={props.increment} disabled={props.isIncrementing}>
            Increment
          </Button>
          <Button type="primary" onClick={props.incrementAsync} disabled={props.isIncrementing}>
            Increment Async
          </Button>
        </Button.Group>
      </div>

      <br />
      
      <div>
        <Button.Group>
          <Button type="primary" onClick={props.decrement} disabled={props.isDecrementing}>
            Decrement
          </Button>
          <Button type="primary" onClick={props.decrementAsync} disabled={props.isDecrementing}>
            Decrement Async
          </Button>
        </Button.Group>
      </div>

      <br />

      <p>
      <Button onClick={() => props.changePage()}>
      Go to about page via redux
      </Button>
      </p>
    </Card>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
