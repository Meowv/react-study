import { Button, Input, List } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    value={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue} />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) => (
                            <List.Item onClick={() => { props.deleteItem(index) }}>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>
        </div>
    );
}

export default TodoListUI;