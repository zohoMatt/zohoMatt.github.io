/**
 * Created by Zoho on 16/9/9.
 */
// todo

import React from 'react';

import LinkIcon from './TableRow/LinkIcon';
import PlayIcon from './TableRow/PlayIcon';
import Tag from './TableRow/Tag';

export default class TableRow extends React.Component {
    
    render() {
        const { name, tags, description, linkUrl, playUrl } = this.props;
        const tagArr = tags.map((name) => {
            return <Tag name={name}/>
        });
        return (
            <div className="table-row">
                <div className="table-box table-content name-column">{name}</div>
                <div className="table-box table-content tags-column">{tagArr}</div>
                <div className="table-box table-content description-column">{description}</div>
                <div className="table-box table-content link-column">
                    <LinkIcon url={linkUrl}/>
                </div>
                <div className="table-box table-content play-column">
                    <PlayIcon url={playUrl}/>
                </div>

            </div>
        );
    }
}
