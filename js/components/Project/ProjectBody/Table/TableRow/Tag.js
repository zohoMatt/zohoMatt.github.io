/**
 * Created by Zoho on 16/9/14.
 */
import React from 'react';

import { TAG_TO_COLOR } from '../../../../../data/style';

/**
 * @props:
 * name             {string} Tag text.
 */
export default class Tag extends React.Component {

    render() {
        const { name, bgColor } = this.props;
        return (
            <div className="tag" style={{ backgroundColor: bgColor }}>{name}</div>
        );
    }
}
