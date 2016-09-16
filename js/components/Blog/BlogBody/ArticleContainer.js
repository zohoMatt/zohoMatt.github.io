/**
 * Created by Zoho on 16/9/17.
 */
// todo

import React from 'react';

import ArticleCard from './ArticleCard';

export default class ArticleContainer extends React.Component {

    render() {
        return (
            <div className="article-container">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>
        );
    }
}
