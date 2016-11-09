/**
 * Created by Zoho on 16/9/9.
 */
import React from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid';

import TableHeader from './Table/TableHeader';
import TableRow from './Table/TableRow';

import { getProjectData } from '../../../data/projectInfo';

@connect((store) => {
    const keyword = store.searchKeyword.project;
    return {
        keyword
    };
})
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

        // filter using keyword
        const { keyword } = this.props;
        const filteredTableArr = (keyword == '') ? tableRowArr : tableRowArr.filter((row) => {
            const name = row.props.name.toLowerCase();
            return name.indexOf(keyword.toLowerCase()) != -1;
        });

        return (
            <div className="table">
                <TableHeader/>
                {filteredTableArr}
            </div>
        );
    }
}
