/**
 * Created by Zoho on 16/9/1.
 */
// todo

import React from 'react';
import { connect } from 'react-redux';

import DetailPanel from './InfoCard/DetailPanel';
import LinkPanel from './InfoCard/LinkPanel';
import RoundPic from './InfoCard/RoundPic';
import UpperBackground from './InfoCard/UpperBackground';

@connect((store) => {
    return {
        faceUp: store.flipCard.faceUp,
        backComponent: store.flipCard.backComponent
    }
})
export default class InfoCard extends React.Component {

    render() {
        const { faceUp, backComponent } = this.props;
        const className = faceUp ? 'info-card' : 'info-card flip';
        return (
            <div className={className}>
                <div class="front">
                    <RoundPic/>
                    <UpperBackground/>
                    <LinkPanel/>
                </div>
                <div class="back">
                    <DetailPanel component={backComponent}/>
                </div>
            </div>
        );
    }
}
