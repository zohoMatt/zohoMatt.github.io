/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

export default class ArticleCard extends React.Component {

    render() {
        return (
            <div className="article-card">
                <div className="article-category">Front end</div>
                <div class="article-title"><p>Welcome to my blog</p></div>
                <div class="article-summary"><p>This is a summary of blog</p></div>
                <div class="article-time">2016-09-14</div>
            </div>
        );
    }
}
