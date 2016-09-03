/**
 * Created by Zoho on 16/9/2.
 */
// todo

import React from 'react';
import { connect } from 'react-redux';

// action functions
import { dispatchFlipCard } from '../../../../model/actions/flipCardAction'


@connect((store) => {
    return {
        faceUp: store.flipCard
    };
})
export default class IconButton extends React.Component {
    constructor() {
        super();
        this.data = {};
    }

    componentWillMount() {
        this.data.name = this.props.iconName;
    }

    render() {
        return (
            <i className={`fa ${this.data.name}`} onClick={this.triggerFlip.bind(this)}></i>
        );
    }
    /*****************************************/
    triggerFlip() {
        const faceUp = this.props.faceUp;
        this.props.dispatch(dispatchFlipCard(faceUp));
    }
}