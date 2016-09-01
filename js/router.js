/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';


import Home from './components/Home'
import Contact from './components/Contact'


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" name="home" component={Home}></Route>
        {/*<Route path="blog" name="blog" component={}></Route>*/}
        {/*<Route path="project" name="project" component={}></Route>*/}
        {/*<Route path="gallery" name="gallery" component={}></Route>*/}
        <Route path="contact" name="contact" component={Contact}></Route>
    </Router>,
    app);

