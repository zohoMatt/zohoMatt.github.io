/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';

import DetailPanel from './InfoCard/DetailPanel';
import LinkPanel from './InfoCard/LinkPanel';
import RoundPic from './InfoCard/RoundPic';
import UpperBackground from './InfoCard/UpperBackground';

export default class InfoCard extends React.Component {

    render() {
        return (
            <div className="info-card">
                <div class="front">
                    <RoundPic/>
                    <UpperBackground/>
                    <LinkPanel/>

                </div>
                <div class="back">
                    <DetailPanel/>
                </div>
            </div>
        );
    }
}