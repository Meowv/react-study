import React, { Component } from 'react'
import store from './store'
import { AddItemAction, changeInputAction, DeleteItemAction, GetListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            const data = res.data
            const action = GetListAction(data)
            store.dispatch(action)
        })

        const data = {
            'data': {
                "list": [
                    '早8点开晨会，分配今天的开发工作',
                    '早9点和项目经理作开发需求讨论会',
                    '晚5:30对今日代码进行review'
                ]
            }
        }
        const action = GetListAction(data)
        store.dispatch(action)
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