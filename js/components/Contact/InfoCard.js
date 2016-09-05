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
        faceUp: store.flipCard.faceUp
    }
})
export default class InfoCard extends React.Component {

    render() {
        const element = this.setDisplayAsState();
        const className = this.props.faceUp ? 'info-card' : 'info-card flip';
        return (
            <div className="info-card-container">
                <div className={className}>
                    <div class="front">
                        <RoundPic/>
                        <UpperBackground/>
                        <LinkPanel/>
                    </div>
                    <div class="back">
                        <DetailPanel/>
                    </div>
                </div>
            </div>
        );
    }
    /*****************************************/
    setDisplayAsState() {
        return (this.props.faceUp) ?
            (<div class="front">
                <RoundPic/>
                <UpperBackground/>
                <LinkPanel/>
            </div>)
            : (<div class="back">
            <DetailPanel/>
        </div>);
    }
}
