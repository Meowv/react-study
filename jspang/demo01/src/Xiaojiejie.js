import React, { Component, Fragment } from 'react'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '大保健',
            list: ['基础按摩', '精油推背']
        }
    }

    inputChange(e) {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index + item}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Xiaojiejie