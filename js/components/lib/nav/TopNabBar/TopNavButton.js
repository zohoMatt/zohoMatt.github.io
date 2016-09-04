/**
 * Created by Zoho on 16/9/5.
 */
import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

@connect(() => {
    return {};
})
export default class TopNavButton extends React.Component {

    render() {
        const {active, path, text} = this.props;
        return (
            <Link class={active} to={path} onClick={this.triggerManager.bind(this)}>
                {text}
            </Link>
        );
    }

    /*****************************************/
    triggerManager() {
        if (this.props.text.toLowerCase() == 'contact') {
            this._triggerFlipFront();
        }
    }

    /*****************************************/
    _triggerFlipFront() {
        this.props.dispatch({
            type: 'FLIP_CARD_FRONT',
            payload: null
        });
    }
}
