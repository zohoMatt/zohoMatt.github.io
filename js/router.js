/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';


import Blog from './components/Blog';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Project from './components/Project';


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" name="home" component={Home}></Route>
        <Route path="blog" name="blog" component={Blog}></Route>
        <Route path="project" name="project" component={Project}></Route>
        <Route path="gallery" name="gallery" component={Gallery}></Route>
        <Route path="contact" name="contact" component={Contact}></Route>
    </Router>,
    app);

