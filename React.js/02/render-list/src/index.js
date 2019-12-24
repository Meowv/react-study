import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}

class Index extends React.Component {
    // render() {
    //     // 保存每个用户渲染以后 JSX 的数组
    //     const usersElements = [];

    //     // 循环每个用户，构建 JSX，push 到数组中
    //     for (let user of users) {
    //         usersElements.push(
    //             <div>
    //                 <div>姓名：{user.username}</div>
    //                 <div>年龄：{user.age}</div>
    //                 <div>性别：{user.gender}</div>
    //                 <hr />
    //             </div>
    //         )
    //     }

    //     return (
    //         <div>{usersElements}</div>
    //     )
    // }

    // render() {
    //     return (
    //         <div>
    //             {
    //                 users.map((user) => {
    //                     return (
    //                         <div>
    //                             <div>姓名：{user.username}</div>
    //                             <div>年龄：{user.age}</div>
    //                             <div>性别：{user.gender}</div>
    //                             <hr />
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                {users.map((user, index) => <User key={index} user={user} />)}
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));