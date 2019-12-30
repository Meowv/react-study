import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'

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

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="qix">加入服务：</label>
                    <input
                        id="qix"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                // <li
                                //     key={index + item}
                                //     onClick={this.deleteItem.bind(this, index)}
                                //     dangerouslySetInnerHTML={{ __html: item }}>
                                // </li>
                                <div>
                                    <XiaojiejieItem
                                        key={index + item}
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)} />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Xiaojiejie