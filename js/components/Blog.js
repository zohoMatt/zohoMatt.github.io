/**
 * Created by Zoho on 16/9/1.
 */
// todo
import React from 'react';

import BlogBody from './Blog/BlogBody';
import TopNavBar from './lib/nav/TopNavBar';

export default class Contact extends React.Component {

  render() {
    return (
        <div id="blog-page">
          <TopNavBar links={[
            {path: 'blog', text: 'Blog'},
            {path: 'project', text: 'Project'},
            {path: 'gallery', text: 'Gallery'},
            {path: 'contact', text: 'Contact'},
          ]} activeLink={0}/>
          {this.createTitleDiv({fontSize: '0.6em'})('On developing: only for displaying styles at present.')}
          {this.createTitleDiv({fontSize: '0.6em'})('开发中：当前只展示样式')}
          <BlogBody/>
        </div>
    );
  }

  /*****************************************/
  createTitleDiv = style => content => {
    return <div style={style}><p>{content}</p></div>;
  }
}
