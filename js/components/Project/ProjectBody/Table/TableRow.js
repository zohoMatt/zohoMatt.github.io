/**
 * Created by Zoho on 16/9/9.
 */
import React from 'react';

import uuid from 'uuid';

import LinkIcon from './TableRow/LinkIcon';
import PlayIcon from './TableRow/PlayIcon';
import Tag from './TableRow/Tag';

import { tagToColor } from '../../../../lib/style';

/**
 *
 * @props name                 {string} Title of this project.
 * @props tags                 {Array<string>} All tags related with this project.
 * @props description          {string} A simple description on this project.
 * @props linkUrl              {string} Repository link for this project.
 * @props playUrl              {string} A page to play with this project.
 */
export default class TableRow extends React.Component {

    render () {
        const {name, tags, description, linkUrl, playUrl} = this.props;
        const tagArr = tags.map((name) => {
            const bgColor = tagToColor(name);
            return <Tag
                key={uuid.v1()}
                name={name}
                bgColor={bgColor}
                clickToRemove="not"
            />;
        });
        return (
            <div className="table-row">
                <div
                    className="table-box table-content name-column">{name}</div>
                <div
                    className="table-box table-content tags-column">{tagArr}</div>
                <div
                    className="table-box table-content description-column">{description}</div>
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
