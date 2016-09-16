/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

import ArticleContainer from './BlogBody/ArticleContainer';
import LeftCatalogPanel from './BlogBody/LeftCatalogPanel';
import SearchBar from '../Project/ProjectBody/SearchBar';

export default class BlogBody extends React.Component {

    render() {
        return (
            <div className="blog-body">
                <SearchBar placeHolder="search anything"/>
                <ArticleContainer/>
            </div>
        );
    }
}

