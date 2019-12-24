import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false
        };
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <LikeButton />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));