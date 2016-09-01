/**
 * Created by Zoho on 16/8/29.
 */
// todo

import React from 'react';

import TopNavbar from './lib/navbar/TopNavBar'

export default class Contact extends React.Component {

    render() {
        return (
            <div id="contact-page">
                <TopNavbar members={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} selectedMember={3} />
            </div>
        );
    }
}
