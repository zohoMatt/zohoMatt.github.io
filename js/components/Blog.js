/**
 * Created by Zoho on 16/9/1.
 */
import BlogBody from './Blog/BlogBody';
import TopNavBar from './lib/nav/TopNavBar';

require('JS/RamdaGlobally')();

/******************** Component *******************/
const Contact = () =>
  <div id="blog-page">
    <TopNavBar links={[
      {path: 'blog', text: 'Blog'},
      {path: 'project', text: 'Project'},
      {path: 'gallery', text: 'Gallery'},
      {path: 'contact', text: 'Contact'}
    ]} activeLink={0}/>
    {createTitleDiv({fontSize: '0.6em'})('On developing: only for displaying styles at present.')}
    {createTitleDiv({fontSize: '0.6em'})('开发中：当前只展示样式')}
    <BlogBody/>
  </div>


/******************** Helpers *******************/
const createTitleDiv = curry((style, content) => {
  return <div style={style}><p>{content}</p></div>;
})


/******************** Exports *******************/
export default Contact;
