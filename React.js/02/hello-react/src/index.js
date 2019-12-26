import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

class Comment extends React.Component {
    static propTypes = {
        comment: PropTypes.object
        // comment: PropTypes.object.isRequired
        //          PropTypes.array
        //          PropTypes.bool
        //          PropTypes.func
        //          PropTypes.number
        //          PropTypes.string
        //          PropTypes.node
        //          PropTypes.element
    }
    render() {
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}

const comments = { 'username': 'qix', 'content': 'aaaaa' };

ReactDOM.render(<Comment comment={comments} />, document.getElementById('root'));