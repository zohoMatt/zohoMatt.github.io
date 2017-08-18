/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

const uuid = require('uuid');

/**
 * @props title     {string}
 * @props archive   {string}
 * @props context     {string}
 * @props tagList   {string[]}
 */
export default class ArticleCard extends React.Component {

  render() {
    const { title, archive, context, tagList } = this.props;
    const tagElems = tagList.map((tag) => {
      return <div key={uuid.v1()} class="article-tags">{tag}</div>;
    });

    return (
        <div className="article-card">
          <div className="article-category">
            <i class="fa fa-archive" aria-hidden="true"></i>
            <div class="article-archive">{archive}</div>
            <i class="fa fa-tags" aria-hidden="true"></i>
            {tagElems}
          </div>
          <div class="article-title"><p>{title}</p></div>
          <div class="article-summary"><p>{context}</p></div>
          <div class="article-time">2016-09-14</div>
        </div>
    );
  }
}
