/**
 * Created by Zoho on 16/9/5.
 */
// todo
import React from 'react';

import RectangleButton from '../../../lib/button/RectangleButton';

const BTN_COLOR = '#D95360';
const BTN_WIDTH = '100px';
const BTN_HEIGHT = '40px';

export default class ResumeDetail extends React.Component {

    render() {
        return (
            <div className="resume-detail">
                <div class="resume-name eng">Hao Zuo</div>
                <div class="resume-name chn">左昊</div>
                <div class="resume-intro"></div>
                <RectangleButton btnColor={BTN_COLOR} btnWidth={BTN_WIDTH} btnHeight={BTN_HEIGHT} text="Fetch"/>
            </div>
        );
    }
}
