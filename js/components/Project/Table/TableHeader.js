/**
 * Created by Zoho on 16/9/9.
 */
// todo

import React from 'react';

export default class TableHeader extends React.Component {

    render() {
        return (
            <div className="table-header table-row">
                <div class="table-box table-header name-column">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    Name</div>
                <div class="table-box table-header tags-column">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    Tags</div>
                <div class="table-box table-header description-column">
                    <i class="fa fa-info" aria-hidden="true"></i>
                    Description</div>
                <div class="table-box table-header link-column">
                    <i class="fa fa-code-fork" aria-hidden="true"></i>
                    RepoLink</div>
                <div class="table-box table-header play-column">
                    <i class="fa fa-play" aria-hidden="true"></i>
                    Play</div>
            </div>
        );
    }
}
