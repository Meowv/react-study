import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'
import React, { Component } from 'react'
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
    }

    changeInputValue(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        const action = { type: 'addItem' }
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue} />
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;