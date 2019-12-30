import React, { Component } from 'react';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        );
    }

    handleClick() {
        // this.props.list = []
        // TypeError: Cannot assign to read only property 'list' of object '#<Object>'
        // 此处报错，list是只读的，单项数据流

        console.log(this.props.index)
        this.props.deleteItem(this.props.index);
    }
}

export default XiaojiejieItem;