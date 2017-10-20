/**
 * Created by Zoho on 16/8/29.
 */
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Blog from './components/Blog';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Project from './components/Project';

import store from './model/index';

// Create app element
const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" name="home" component={Home}></Route>
                <Route path="blog" name="blog" component={Blog}></Route>
                <Route path="project" name="project" component={Project}></Route>
                <Route path="gallery" name="gallery" component={Gallery}></Route>
                <Route path="contact" name="contact" component={Contact}></Route>
            </div>
        </Router>
    </Provider>,
    app,
);
