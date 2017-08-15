/**
 * Created by Zoho on 16/9/9.
 */
import React from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid';
const axios = require('axios');

import TableHeader from './Table/TableHeader';
import TableRow from './Table/TableRow';

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
        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/project/all')
            .then((res) => {
                this.setState({
                    entries: res.data.list
                });
            });
    }

    render() {
        const tableRowArr = this.state.entries.map((entry) => {
            const { id, pname, description, repo, playable, tagList } = entry;

            return <TableRow
                key={uuid.v1()}
                name={pname}
                tags={tagList.map(t => t.tag)}
                description={description}
                linkUrl={repo}
                playUrl={playable}
            />;
        });

        // filter using keyword
        const { keyword, tags } = this.props;
        let filteredTableArr = (keyword == '') ? tableRowArr : tableRowArr.filter((row) => {
            const name = row.props.name.toLowerCase();
            const description = row.props.description.toLowerCase();
            return name.indexOf(keyword.toLowerCase()) != -1 || description.indexOf(keyword.toLowerCase()) != -1;
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
