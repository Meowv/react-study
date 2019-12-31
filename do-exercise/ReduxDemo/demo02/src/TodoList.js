import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    let { inputvalue, inputChange, clickButton, list, deleteItem } = props;
    return (
        <div>
            <div>
                <input placeholder='写点啥吧' value={inputvalue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => deleteItem(index)}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        deleteItem(index) {
            let action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);