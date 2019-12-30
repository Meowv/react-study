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

    inputChange() {
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            console.log(this.ul.querySelectorAll('div').length)
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
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    // avname='波多野结衣'
                                    list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)} />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Xiaojiejie