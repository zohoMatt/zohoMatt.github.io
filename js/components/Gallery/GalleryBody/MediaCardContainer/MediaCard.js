/**
 * Created by hao.zuo on 2017/8/15.
 */

import React from 'react';

import InfoBanner from './InfoBanner';

// todo
export default class MediaCard extends React.Component {

    render() {
        // todo Make it only three pictures displayed in one row
        // todo Is it necessary to display in the above way??
        const randomWidth = {
            width: Math.random() * 160 + 320
        };
        return (
            <div className="media-card" style={randomWidth}>
                <InfoBanner/>
            </div>
        );
    }
}
