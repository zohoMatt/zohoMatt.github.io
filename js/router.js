/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';


import Home from './components/Home'
import Contact from './components/Contact'


const home = document.getElementById('homepage');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}></IndexRoute>
            {/*<Route path="blog" name="blog" component={}></Route>*/}
            {/*<Route path="project" name="project" component={}></Route>*/}
            {/*<Route path="gallery" name="gallery" component={}></Route>*/}
            <Route path="contact" name="contact" component={Contact}></Route>
        </Route>
    </Router>,
    home);

