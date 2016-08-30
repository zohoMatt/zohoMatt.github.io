/**
 * Created by Zoho on 16/8/30.
 */
import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div id="title">
                <span className="triangle-bracket">&lt;</span>
                <span className="tag-text">zoho</span>
                <span className="triangle-bracket">&gt;</span>
                's code
                <span className="triangle-bracket">&lt;</span>
                <span className="tag-text">/Lab</span>
                <span className="triangle-bracket">&gt;</span>
            </div>
        );
    }
}


