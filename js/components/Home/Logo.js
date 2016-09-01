/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';

import Avatar from './Logo/Avatar';
import Title from './Logo/Title';


export default class Logo extends React.Component {

    componentWillMount() {
        this.setState({
            imgPath: require('../../../img/avatar.jpg')
        });
    }

    render() {
        return (
            <div id="logo">
                <Avatar imgSource={this.state.imgPath}/>
                <Title/>
            </div>
        );
    }
}