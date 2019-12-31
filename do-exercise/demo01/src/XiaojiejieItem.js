import PropTypes from 'prop-types';
import React, { Component } from 'react';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // 组件第一次存在 dom 中，函数是不会执行的
    // 如果已经存在于 dom 中，函数才会被执行
    componentWillReceiveProps() {
        console.log('child - componentWillReceiveProps')
    }

    componentWillUnmount() {
        console.log('child - componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.avname} 为你做- {this.props.content}
            </div>
        );
    }

    handleClick() {
        // this.props.list = []
        // TypeError: Cannot assign to read only property 'list' of object '#<Object>'
        // 此处报错，list是只读的，单项数据流

        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    avname: PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps = {
    avname: '松岛枫'
}

export default XiaojiejieItem;