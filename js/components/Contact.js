/**
 * Created by Zoho on 16/8/29.
 */
// todo

import React from 'react';

import TopNavBar from './lib/nav/TopNavBar'

export default class Contact extends React.Component {

    render() {
        return (
            <div id="contact-page">
                <CenterNavBar members={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} selectedMember={3} />
            </div>
        );
    }
}
