import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends React.Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor(props) {
        super(props);
        this.state = {
            likedText: '已赞',
            unlikedText: '赞'
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        });
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    render() {
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'

        const wordings = this.props.wordings || {
            likedText: '取消',
            unlikedText: '点赞'
        }

        return (
            // <button onClick={this.handleClickOnLikeButton.bind(this)}>
            //     {/* {this.state.isLiked ? likedText : unlikedText} 👍 */}
            //     {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
            // </button>
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <LikeButton />
                <LikeButton likedText='已赞' unlikedText='赞' />
                <LikeButton wordings={{ likedText: '已赞', unlikedText: '赞' }} />

                <LikeButton
                    wordings={{ likedText: '已赞', unlikedText: '赞' }}
                    onClick={() => console.log('Click on like button!')} />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));