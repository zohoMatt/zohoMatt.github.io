/**
 * Created by Zoho on 16/9/5.
 */
import React from 'react';

import RectangleButton from '../../../lib/button/RectangleButton';

import { BTN_COLOR, BTN_WIDTH, BTN_HEIGHT } from '../../../../lib/style';

export default class ResumeDetail extends React.Component {

    render() {
        return (
            <div className="resume-detail">
                <div class="resume-name"><p>Hao Zuo <br/>左昊</p></div>
                <div class="resume-intro eng">
                    <p>I am currently a master candidate at Tsinghua University. <br/><br/> For more information, please click the button below to EMAIL me for specific resume.</p>
                </div>
                <div class="resume-intro"></div>
                <RectangleButton btnColor={BTN_COLOR} btnWidth={BTN_WIDTH} btnHeight={BTN_HEIGHT} text="Fetch CV"
                                 clickHandler={()=>{
                                     // setTimeout just for visual effect
                                     setTimeout(() => {
                                        window.open('mailto:zoho10@outlook.com?subject=CVRequest&body=This%20mail%20is%20from%20personal%20page.')
                                     }, 300);
                                 }} />
            </div>
        );
    }
}
