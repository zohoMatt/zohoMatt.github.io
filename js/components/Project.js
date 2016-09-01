/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';

import TopNavBar from './lib/nav/TopNavBar'

export default class Project extends React.Component {

    render() {
        return (
            <div id="contact-page">
                <TopNavBar links={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} activeLink={1} />
            </div>
        );
    }
}