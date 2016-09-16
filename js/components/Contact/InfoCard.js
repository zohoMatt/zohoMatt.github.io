/**
 * Created by Zoho on 16/9/1.
 */
import React from 'react';
import { connect } from 'react-redux';

import DetailPanel from './InfoCard/DetailPanel';
import LinkPanel from './InfoCard/LinkPanel';
import RoundPic from './InfoCard/RoundPic';
import UpperBackground from './InfoCard/UpperBackground';

/**
 * @props:
 * // connected
 * faceUp               {boolean} Whether the info card is facing up.
 * backComponentType    {string} Type string to describe the back component.
 */
@connect((store) => {
    return {
        faceUp: store.flipCard.faceUp,
        backComponentType: store.flipCard.backComponentType
    }
})
export default class InfoCard extends React.Component {

    render() {
        const { faceUp, backComponentType } = this.props;
        const className = faceUp ? 'info-card' : 'info-card flip';
        return (
            <div className={className}>
                <div class="front">
                    <RoundPic/>
                    <UpperBackground/>
                    <LinkPanel/>
                </div>
                <div class="back">
                    <DetailPanel component={backComponentType}/>
                </div>
            </div>
        );
    }
}
