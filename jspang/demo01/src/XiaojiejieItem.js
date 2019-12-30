import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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

        console.log(this.props.index)
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