/**
 * Created by Zoho on 16/9/14.
 */
// todo

import React from 'react';

import { whichRepoHost } from '../../../../data/projectInfo';

export default class LinkIcon extends React.Component {

    render() {
        const url = this.props.url;
        let icon, host;
        if (url) {
            host = whichRepoHost(url);
            icon = <i class={`fa fa-${host}`} aria-hidden="true"></i>;
        } else {
            host = 'no link';
            icon = <i class="fa fa-question-circle-o" aria-hidden="true"></i>;
        }
        return (
            <div className="repo-link" href={ url } onClick={this._openNewTab.bind(this, url)}>
                {icon} {host}
            </div>
        );
    }

    /*****************************************/
    _openNewTab(url) {
        window.open(url);
    }
}
