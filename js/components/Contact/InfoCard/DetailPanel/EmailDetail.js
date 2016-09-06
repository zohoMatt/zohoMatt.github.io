/**
 * Created by Zoho on 16/9/5.
 */
// todo

import React from 'react';

import RectangleButton from '../../../lib/button/RectangleButton';

import { BTN_COLOR, BTN_WIDTH, BTN_HEIGHT } from '../../../_variables';

export default class GitHubDetail extends React.Component {

    render() {
        return (
            <div className="github-detail">
                <div className="github-name"><p>Send me an email</p></div>
                <RectangleButton btnColor={BTN_COLOR} btnWidth={BTN_WIDTH} btnHeight={BTN_HEIGHT} text="Email me"
                                 clickHandler={()=>{
                                     // setTimeout just for visual effect
                                     setTimeout(() => {
                                         window.open('mailto:zoho10@outlook.com')
                                     }, 300);
                                 }}/>
            </div>
        );
    }
}
