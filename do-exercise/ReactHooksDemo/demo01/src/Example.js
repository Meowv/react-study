import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//     }
//     render() {
//         return (
//             <div>
//                 <p>你点击了 {this.state.count} 次</p>
//                 <button onClick={this.addCount.bind(this)}>点点点我</button>
//             </div>
//         );
//     }
//     addCount() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
// }

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面')
        return () => {
            console.log('老弟，你走了！Index页面')
        }
    }, [])
    return <h2>meowv.com</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}

function Example() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`useEffect=>你点击了 ${count} 次`)
        return () => {
            console.log('................................')
        }
    }, [count])

    return (
        <div>
            <p>你点击了 {count} 次</p>
            <button onClick={() => { setCount(count + 1) }}>点点点我</button>

            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}

export default Example;