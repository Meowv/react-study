import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>阿星Plus</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));

// 使用 JSX 描述 UI 信息，上面代码编译后的代码，JSX其实就是 React.createElemen 的一个语法糖
class Header extends React.Component {
    render() {
        return (
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h1", { className: 'title' }, "阿星Plus"
                )
            )
        )
    }
}

ReactDOM.render(
    React.createElement(Header, null),
    document.getElementById('root')
);