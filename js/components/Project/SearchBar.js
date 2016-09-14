/**
 * Created by Zoho on 16/9/6.
 */
// todo

import React from 'react';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            revealText: 'search'
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input placeholder="search not working now" type="text" class="search-input" />
                <div class="search-btn fa fa-search"></div>
            </div>
        );
    }

}


