import React, { Component } from 'react'
import store from './store'
import { AddItemAction, changeInputAction, DeleteItemAction, GetTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        store.subscribe(this.storeChange)
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        const action = AddItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = DeleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount() {
        // const action = GetTodoList()
        // store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }
}
export default TodoList;