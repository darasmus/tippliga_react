import React from 'react';
import { connect } from 'react-redux';

import * as counterActions from '../actions/counter';


const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    multiply: () => dispatch(counterActions.multiply(2))
});

const mapStateToProps = (state) => ({
    count: state.counter.count
});

class Counter extends React.Component {
    static propTypes = {
        increment: React.PropTypes.func.isRequired,
        decrement: React.PropTypes.func.isRequired,
        multiply: React.PropTypes.func.isRequired,
        count: React.PropTypes.number.isRequired
    }

    render () {
        return (
            <div className="counter">
                <button onClick={this.props.decrement}>-1</button>
                <strong>{this.props.count}</strong>
                <button onClick={this.props.increment}>+1</button>
                <button onClick={this.props.multiply}>*2</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export {
    Counter
};
