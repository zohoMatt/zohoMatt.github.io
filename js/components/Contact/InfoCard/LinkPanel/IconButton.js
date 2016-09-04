/**
 * Created by Zoho on 16/9/2.
 */
// todo

import React from 'react';
import { connect } from 'react-redux';

// action functions
import { dispatchFlipBack } from '../../../../model/actions/flipCardAction'


@connect(() => {
    return {};
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
            <i className={`fa ${this.data.name}`} onClick={this.triggerManager.bind(this)}></i>
        );
    }
    /*****************************************/
    triggerManager() {
        this._triggerFlip();
    }

    /*****************************************/
    _triggerFlip() {
        const name = this.data.name.split('-')[1];          // get the * part of fa-*
        this.props.dispatch(dispatchFlipBack(name));
    }

}
