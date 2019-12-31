import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 123, title: '阿星Plus的个人博客-1' },
                { id: 456, title: '阿星Plus的个人博客-2' },
                { id: 789, title: '阿星Plus的个人博客-3' },
            ]
        }

        // 编程式重定向
        this.props.history.push('/home/')
    }
    render() {
        return (
            <div>
                <Redirect to="/home/" />
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/' + item.id}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;