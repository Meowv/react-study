import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'green')}>Green</button>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'yellow')}>Yellow</button>
            </div>
        )
    }

}