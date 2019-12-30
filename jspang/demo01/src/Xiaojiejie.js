import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '大保健',
            list: []
        }
    }

    componentWillMount() {
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }

    componentDidMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res) => {
                console.log('axios 获取数据成功:' + JSON.stringify(res))

                this.setState({
                    list: ['基础按摩', '精油推背']
                })
            })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---组件发生改变前执行')
        // 它要求返回一个布尔类型的结果，必须有返回值
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate----组件更新之后执行')
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
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
        console.log('render---组件挂载中.......')

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
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >
                                        <XiaojiejieItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            // avname='波多野结衣'
                                            list={this.state.list}
                                            deleteItem={this.deleteItem.bind(this)} />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>

                <Boss />
            </Fragment>
        )
    }
}
export default Xiaojiejie