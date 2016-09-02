/**
 * Created by Zoho on 16/9/2.
 */
// todo

import React from 'react';

import Icon from './LinkPanel/Icon'

export default class LinkPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            className: 'contact-link'
        };
    }
    
    render() {
        return (
            <div class={this.state.className}>
                <Icon iconName="fa-archive"/>
                <Icon iconName="fa-github"/>
                <Icon iconName="fa-envelope"/>
                <Icon iconName="fa-linkedin-square"/>
            </div>
        );
    }
}