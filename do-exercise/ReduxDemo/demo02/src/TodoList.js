import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>qix</li>
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(stateToProps, null)(TodoList);