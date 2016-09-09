/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';

import TopNavBar from './lib/nav/TopNavBar'

export default class Gallery extends React.Component {

    render() {
        return (
            <div id="gallery-page">
                <TopNavBar links={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} activeLink={2} />
            </div>
        );
    }
}
