import React from 'react';
import { Route, Link } from 'react-router-dom'
import RreactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/react/">React教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/react/" component={RreactPage} />
                <Route path="/video/vue/" component={Vue} />
                <Route path="/video/flutter/" component={Flutter} />
            </div>
        </div>
    )
}

export default Video