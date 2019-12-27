import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
    render() {
        return (
            <div>
                <button>Red</button>
                <button>Green</button>
                <button>Blue</button>
                <button>Yellow</button>
            </div>
        )
    }
}

export default ThemeSwitch