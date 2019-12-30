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
        console.log(this.props.index)
        this.props.deleteItem(this.props.index);
    }
}

export default XiaojiejieItem;