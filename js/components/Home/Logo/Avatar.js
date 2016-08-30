/**
 * Created by Zoho on 16/8/30.
 */
import React from 'react';

const avatarImg = require('../../../../img/avatar.jpg');

export default class Avatar extends React.Component {
    render() {
        return (
            <div class="avatar">
                <img src={avatarImg} alt="GitHub: zohoFrank" />
            </div>
        );
    }
}