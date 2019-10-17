import React, { Component } from 'react';
import { connect } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from "../../store/actions/actions";

class Counter extends Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract" clicked={this.props.onSubtractCounter} />
                <br />
                <button onClick={() => this.props.StoreResult(this.props.ctr)}>SHOW RESULTS</button>
                <ul>
                    {this.props.storedResults.map(item => (
                        <li key={item.id} onClick={() => this.props.DeleteResult(item.id)}>{item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.deccrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
        StoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        DeleteResult: (id) => dispatch(actionCreators.delResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);