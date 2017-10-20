/**
 * Created by Zoho on 16/9/1.
 */
import BlogBody from './Blog/BlogBody';
import TopNavBar from './assets/nav/TopNavBar';

/******************** Helpers *******************/
const createTextDiv = curry((style, content) =>
    <div style={style}><p>{content}</p></div>,
);

const textDivWithSize = createTextDiv({fontSize: '0.6em'});

/******************** Component *******************/
const Blog = () =>
    <div id="blog-page">
        <TopNavBar links={[
            {path: 'blog', text: 'Blog'},
            {path: 'project', text: 'Project'},
            {path: 'gallery', text: 'Gallery'},
            {path: 'contact', text: 'Contact'},
        ]} activeLink={0}/>
        {textDivWithSize('On developing: only for displaying styles at present.')}
        {textDivWithSize('开发中：当前只展示样式')}
        <BlogBody/>
    </div>;


/******************** Exports *******************/
export default Blog;
