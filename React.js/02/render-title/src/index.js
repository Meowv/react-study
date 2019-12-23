import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 在页面上渲染标题

class App extends React.Component {
    render() {
        document.title = '阿星Plus'
        return (
            <div>
                <h1>阿星Plus</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));