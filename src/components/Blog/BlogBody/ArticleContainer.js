/**
 * Created by Zoho on 16/9/17.
 */
// todo

const axios = require('axios');
const url = require('url');
const uuid = require('uuid');

import { APIHOST } from 'src/lib/structure';
import ArticleCard from './ArticleContainer/ArticleCard';

/**
 * @state articles            string[]
 * @state articles.title      string
 * @state articles.archive    string
 * @state articles.tagList    string[]
 * @state articles.context      string
 */
export default class ArticleContainer extends React.Component {
    constructor () {
        super();
        this.state = {
            articles: [],
        };
    }

    componentDidMount () {
        axios.get(url.resolve(APIHOST, '/api/blog/all')).then((response) => {
            this.setState({
                articles: response.data.list,
            });
        });
    }

    render () {
        const articleList = this.state.articles;
        const articleCardElements = articleList.map((atc) => {
            const {title, archive, tagList, context} = atc;
            const tags = tagList.map(t => t.tag);
            return <ArticleCard key={uuid.v1()}
                                title={title}
                                archive={archive}
                                tagList={tags}
                                context={context}/>;
        });

        return (
            <div className="article-container">
                {articleCardElements}
            </div>
        );
    }
}
