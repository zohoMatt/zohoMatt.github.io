/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';

import SearchBar from './Project/SearchBar';
import StatusBar from './Project/StatusBar';
import Table from './Project/Table';
import TopNavBar from './lib/nav/TopNavBar';

export default class Project extends React.Component {

    render() {
        return (
            <div id="project-page">
                <TopNavBar links={[
                    {path: 'blog', text: 'Blog'},
                    {path: 'project', text: 'Project'},
                    {path: 'gallery', text: 'Gallery'},
                    {path: 'contact', text: 'Contact'}
                ]} activeLink={1} />
                <div class="project-body">
                    <SearchBar/>
                    <StatusBar/>
                    <Table/>
                </div>
            </div>
        );
    }
}
