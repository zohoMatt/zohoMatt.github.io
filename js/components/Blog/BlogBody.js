/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

import ArticleContainer from './BlogBody/ArticleContainer';
import CatalogPanel from './BlogBody/CatalogPanel';
import SearchBar from '../Project/ProjectBody/SearchBar';

export default class BlogBody extends React.Component {

  render() {
    return (
        <div className="blog-body">
          <SearchBar placeHolder="search anything"/>
          <ArticleContainer/>
          <CatalogPanel/>
        </div>
    );
  }
}

