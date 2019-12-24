import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component {
    render() {
        return (
            <h1>Title</h1>
        )
    }
}

class Header extends React.Component {
    render() {
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
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));