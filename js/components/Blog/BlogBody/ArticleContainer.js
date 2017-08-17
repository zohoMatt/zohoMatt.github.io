/**
 * Created by Zoho on 16/9/17.
 */
// todo

import React from 'react';
const axios = require('axios');
const url = require('url');

import { APIHOST } from '../../../lib/structure';
import ArticleCard from './ArticleContainer/ArticleCard';

/**
 * @state articles            string[]
 * @state articles.title      string
 * @state articles.archive    string
 * @state articles.tagList    string[]
 * @state articles.intro      string
 */
export default class ArticleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(url.resolve(APIHOST, '/api/blog/all'))
    .then((response) => {
      this.setState(response.data.list);
    })
  }

  render() {
    const articleList = this.state.articles;
    const articleCardElements = articleList.map((atc) => {
      const { title, archive, tagList, intro } = atc;
      return <ArticleCard title={title}
                          archive={archive}
                          tagList={tagList}
                          intro={intro} />
    });

    return (
        <div className="article-container">
          {articleCardElements}
          <ArticleCard title="Welcome to my blog"
                       archive="Frontend"
                       tagList={['canvas', 'web']}
                       intro="This is a summary of my blog" />
        </div>
    );
  }
}
