/**
 * Created by Zoho on 16/8/29.
 */
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { asyncComponent } from 'lib/reactAsyncComponent';

const Blog = asyncComponent(() => import('./components/Blog'));
const Contact = asyncComponent(() => import('./components/Contact'));
const Gallery = asyncComponent(() => import('./components/Gallery'));
const Home = asyncComponent(() => import('./components/Home'));
const Project = asyncComponent(() => import('./components/Project'));

import store from './model/index';

// Create app element
const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div id="router-container">
                <Route exact path="/" name="home" component={Home}></Route>
                <Route path="/blog" name="blog" component={Blog}></Route>
                <Route path="/project" name="project" component={Project}></Route>
                <Route path="/gallery" name="gallery" component={Gallery}></Route>
                <Route path="/contact" name="contact" component={Contact}></Route>
            </div>
        </Router>
    </Provider>,
    app,
);
