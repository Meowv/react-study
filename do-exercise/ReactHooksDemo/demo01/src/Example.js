import React, { useState } from 'react';

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

function Example() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>你点击了 {count} 次</p>
            <button onClick={() => { setCount(count + 1) }}>点点点我</button>
        </div>
    )
}

export default Example;