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
    const tags = store.tagFilter.project;
    return {
        keyword,
        tags
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
        const { keyword, tags } = this.props;
        let filteredTableArr = (keyword == '') ? tableRowArr : tableRowArr.filter((row) => {
            const name = row.props.name.toLowerCase();
            return name.indexOf(keyword.toLowerCase()) != -1;
        });
        // filter using tags
        filteredTableArr = (tags.length == 0) ? filteredTableArr : filteredTableArr.filter((row) => {
            const rowTags = row.props.tags;
            for (let filter of tags) {
                if (rowTags.indexOf(filter) == -1)
                    return false
            }
            return true;
        });

        return (
            <div className="table">
                <TableHeader/>
                {filteredTableArr}
            </div>
        );
    }
}
