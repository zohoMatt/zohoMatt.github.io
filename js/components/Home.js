/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './Home/Logo';
import Navbar from './Home/Navbar';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-container">
                <Logo/>
                <Navbar/>
            </div>
        );
    }
}
