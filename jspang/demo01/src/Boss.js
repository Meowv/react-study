import React, { Component } from 'react';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }

        this.toToggle = this.toToggle.bind(this)
    }

    toToggle() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
                <div><button onClick={this.toToggle}>召唤Boss</button></div>
            </div>
        );
    }
}

export default Boss;