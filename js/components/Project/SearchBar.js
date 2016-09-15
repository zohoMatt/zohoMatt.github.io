/**
 * Created by Zoho on 16/9/6.
 */
// todo

import React from 'react';
import { connect } from 'react-redux';

import { searchProjectAction } from '../../model/actions/searchAction';

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
        return (
            <div className="search-bar">
                <input placeholder="project name search" type="text" class="search-input"
                       onInput={this.onInputHandler.bind(this)}/>
                <div class="search-btn fa fa-search"></div>
            </div>
        );
    }

    /*****************************************/
    onInputHandler(event) {
        this.props.dispatch(searchProjectAction(event.target.value));
    }

}


