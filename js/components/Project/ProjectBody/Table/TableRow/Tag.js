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
        let { name } = this.props;
        name = name.replace(' ', '_');
        const backgroundColor = TAG_TO_COLOR[name];
        return (
            <div className="tag" style={{ backgroundColor }}>{name}</div>
        );
    }
}
