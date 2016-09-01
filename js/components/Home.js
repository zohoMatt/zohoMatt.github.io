/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';

import Logo from './Home/Logo';
import CenterNavBar from './Home/CenterNavBar';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-container">
                <Logo/>
                <CenterNavBar id="navbar" links={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} />
            </div>
        );
    }
}
