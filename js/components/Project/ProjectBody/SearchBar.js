/**
 * Created by Zoho on 16/9/6.
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * @props:
 * // origin
 * placeHolder          {string} The 'placeholder' property for input element.
 * onInputHandler       {function} (event) For 'onInput' event handler in input.
 */
@connect(() => {
    return {};
})
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            revealText: 'searchKeyword'
        }
    }

    render() {
        const { placeHolder, onInputHandler } = this.props;
        return (
            <div className="search-bar">
                <input placeholder={placeHolder} type="text" class="search-input"
                       onInput={onInputHandler}/>
                <div class="search-btn fa fa-search"></div>
            </div>
        );
    }

}


