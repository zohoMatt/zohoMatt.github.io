/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

export default class ArticleCard extends React.Component {

  render() {
    return (
        <div className="article-card">
          <div className="article-category">
            <i class="fa fa-archive" aria-hidden="true"></i>
            <div class="article-archive">Frontend</div>
            <i class="fa fa-tags" aria-hidden="true"></i>
            <div class="article-tags">canvas</div>
          </div>
          <div class="article-title"><p>Welcome to my blog</p></div>
          <div class="article-summary"><p>This is a summary of blog</p></div>
          <div class="article-time">2016-09-14</div>
        </div>
    );
  }
}
