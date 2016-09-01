/**
 * Created by Zoho on 16/8/30.
 */
import React from 'react';
import { IndexLink } from 'react-router';

const avatarImg = require('../../../../img/avatar.jpg');

export default class Avatar extends React.Component {
    render() {
        return (
            <div class="avatar">
                <IndexLink to="/">
                    <img src={avatarImg} alt="GitHub: zohoFrank" />
                </IndexLink>
            </div>
        );
    }
}