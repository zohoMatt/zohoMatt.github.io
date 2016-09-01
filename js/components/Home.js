/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';

import Logo from './Home/Logo';
import TopNavbar from './lib/navbar/TopNavBar';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-container">
                <Logo/>
                <TopNavbar id="navbar" members={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} selectedMember={3} />
            </div>
        );
    }
}
