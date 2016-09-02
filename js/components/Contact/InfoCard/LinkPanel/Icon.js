/**
 * Created by Zoho on 16/9/2.
 */
// todo

import React from 'react';

export default class IconButton extends React.Component {

    componentWillMount() {
        this.setState({
            name: this.props.iconName
        });
    }

    render() {
        return (
            <i className={`fa ${this.state.name}`}></i>
        );
    }
}