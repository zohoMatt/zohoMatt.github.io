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

    componentWillMount() {
        this.setState({
            name: this.props.iconName
        });
    }

    render() {
        return (
            <i className={`fa ${this.state.name}`} onClick={this.triggerFlip.bind(this)}></i>
        );
    }
    /*****************************************/
    triggerFlip() {
        const faceUp = this.props.faceUp;
        this.props.dispatch(dispatchFlipCard(faceUp));
    }
}