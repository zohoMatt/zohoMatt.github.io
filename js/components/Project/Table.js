/**
 * Created by Zoho on 16/9/9.
 */
// todo

import React from 'react';

import TableHeader from './Table/TableHeader';
import TableRow from './Table/TableRow';

import { getProjectData } from '../../data/projectInfo';

export default class Table extends React.Component {
    constructor() {
        super();
        const test = getProjectData()[1];
        const { title, tags, description, link, play } = test;
        this.data = { name: title, tags, description, linkUrl: link, playUrl: play };
    }

    render() {
        // name, tags, description, linkUrl, playUrl
        const { name, tags, description, linkUrl, playUrl } = this.data;
        return (
            <div className="table">
                <TableHeader/>
                <TableRow
                    name={name}
                    tags={tags}
                    description={description}
                    linkUrl={linkUrl}
                    playUrl={playUrl}
                />
            </div>
        );
    }
}
