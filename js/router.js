/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

import Blog from './components/Blog';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Project from './components/Project';

import store from './model/store';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" name="home" component={Home}></Route>
            <Route path="blog" name="blog" component={Blog}></Route>
            <Route path="blog/2" name="blog" component={Contact}></Route>
            <Route path="project" name="project" component={Project}></Route>
            <Route path="gallery" name="gallery" component={Gallery}></Route>
            <Route path="contact" name="contact" component={Contact}></Route>
        </Router>
    </Provider>,
    app
);

