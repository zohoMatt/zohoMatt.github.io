/**
 * Created by Zoho on 16/9/6.
 */
import React from 'react';
import { connect } from 'react-redux';

import Tag from './Table/TableRow/Tag';

import uuid from 'uuid';

import { tagToColor } from '../../../data/style'

@connect((store) => {
    const { searchKeyword, tagFilter } = store;
    return {
        searchKeyword,
        tagFilter
    }
})
export default class StatusBar extends React.Component {

    render() {
        const {type, searchKeyword, tagFilter} = this.props;
        const comKeyword = searchKeyword[type];
        const comTags = tagFilter[type];

        // Text part and tags part
        const text = (comKeyword) ?
            <p>{`'${comKeyword}'`} </p> :
            <p></p>;
        const tags = comTags.map((name) => {
            const bgColor = tagToColor(name);
            return <Tag
                key={uuid.v1()}
                name={name}
                bgColor={bgColor}
                clickToRemove="remove"
            />
        });

        // Combine text and tags
        let combine = null;
        if (comKeyword || tags.length > 0) {
            combine = <div><p>filter: </p>{text} {tags}</div>
        } else {
            combine = <div><p>no filter</p></div>
        }

        return (
            <div className="status-text">{combine}</div>
        );
    }
}
