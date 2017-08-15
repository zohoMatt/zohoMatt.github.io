/**
 * Created by Zoho on 16/9/17.
 */
// todo

import React from 'react';

import ArticleCard from './ArticleContainer/ArticleCard';

export default class ArticleContainer extends React.Component {

    render() {
        const articleCard = <ArticleCard/>;
        return (
            <div className="article-container">
                {Array(10).fill(articleCard)}
            </div>
        );
    }
}
