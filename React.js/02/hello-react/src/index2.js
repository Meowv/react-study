import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component {
    // handleClickOnTitle(e) {
    //     console.log(this)
    //     console.log('Click on title.')
    //     console.log(e.target.innerHTML)
    // }
    handleClickOnTitle(word, e) {
        console.log(this, word)
    }
    render() {
        return (
            // <h1 onClick={this.handleClickOnTitle}>阿星Plus</h1>
            // <h1 onClick={this.handleClickOnTitle.bind(this)}>阿星Plus</h1>
            <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>阿星Plus</h1>
        )
    }
}

class Header extends React.Component {
    constructor() {
        super()
        console.log('constructor')
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        console.log('render')

        return (
            <div>
                <Title />
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <h2>This is main content</h2>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <h2>This is footer</h2>
        )
    }
}

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowHeader ? <Header /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>显示或者隐藏标题</button>
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));