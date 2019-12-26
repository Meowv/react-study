import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Card children={
    <div>
        <h2>阿星Plus</h2>
        <div>https://meowv.com</div>
        订阅：<input />
    </div>
} />, document.getElementById('root'));