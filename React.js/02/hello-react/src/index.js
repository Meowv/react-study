import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            content: '<h1>阿星Plus</h1>',
            color: 'green'
        }
    }

    handleChangeColor() {
        this.setState({
            color: 'blue'
        })
    }

    render() {
        return (
            <div>
                <h1 style={{ fontSize: '12px', color: 'red' }}></h1>
                <h1 style={{ fontSize: '12px', color: this.state.color }}>哈哈哈</h1>
                <button onClick={this.handleChangeColor.bind(this)}>变色</button>
                <div className='editor-wrapper'>{this.state.content}</div>
                <div className='editor-wrapper' dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </div>
        )
    }
}

ReactDOM.render(<Editor />, document.getElementById('root'));