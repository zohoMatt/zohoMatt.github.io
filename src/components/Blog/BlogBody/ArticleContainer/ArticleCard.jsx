/**
 * Created by Zoho on 16/9/16.
 */
// todo

const uuid = require('uuid');

/** ****************** Component ****************** */
/**
 * @props title     {string}
 * @props archive   {string}
 * @props context   {string}
 * @props tagList   {string[]}
 */
const ArticleCard = ({
  title, archive, context, tagList,
}) => {
  const tagElems = tagList.map(tag => <div key={uuid.v1()} className="article-tags">{tag}</div>);
  return (
    <div className="article-card">
      <div className="article-category">
        <i className="fa fa-archive" aria-hidden="true" />
        <div className="article-archive">{archive}</div>
        <i className="fa fa-tags" aria-hidden="true" />
        {tagElems}
      </div>
      <div className="article-title"><p>{title}</p></div>
      <div className="article-summary"><p>{context}</p></div>
      <div className="article-time">2016-09-14</div>
    </div>
  );
};


/** ****************** Exports ****************** */
export default ArticleCard;
