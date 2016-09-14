/**
 * Created by Zoho on 16/9/9.
 */
// todo

import React from 'react';

import uuid from 'uuid';

import TableHeader from './Table/TableHeader';
import TableRow from './Table/TableRow';

import { getProjectData } from '../../data/projectInfo';

export default class Table extends React.Component {
    constructor() {
        super();
        this.data = {
            entries: getProjectData()
        };
    }

    render() {
        const tableRowArr = this.data.entries.map((entry) => {
            const { title, tags, description, link, play } = entry;
            return <TableRow
                key={uuid.v1()}
                name={title}
                tags={tags}
                description={description}
                linkUrl={link}
                playUrl={play}
            />
        });

        return (
            <div className="table">
                <TableHeader/>
                {tableRowArr}
            </div>
        );
    }
}
