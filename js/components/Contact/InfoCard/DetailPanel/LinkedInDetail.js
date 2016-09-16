/**
 * Created by Zoho on 16/9/5.
 */
import React from 'react';

import RectangleButton from '../../../lib/button/RectangleButton';

import { BTN_COLOR, BTN_WIDTH, BTN_HEIGHT } from '../../../../data/style';

export default class LinkedInDetail extends React.Component {

    render() {
        return (
            <div className="linkedin-detail">
                <div className="linkedin-name">LinkedIn Page</div>
                <RectangleButton btnColor={BTN_COLOR} btnWidth={BTN_WIDTH} btnHeight={BTN_HEIGHT} text="Visit"
                                 clickHandler={()=>{
                                     // setTimeout just for visual effect
                                     setTimeout(() => {
                                         window.open('https://www.linkedin.com/in/zohofrank')
                                     }, 300);
                                 }}/>
            </div>
        );
    }
}
