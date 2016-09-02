/**
 * Created by Zoho on 16/9/2.
 */
import { applyMiddleware, createStore, compose } from 'redux';

// Reducer
import reducer from './reducers/rootReducer';
// Middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise(), thunk, logger());
const reduxDevTool = window.devToolsExtension ? window.devToolsExtension() : x => x;        // Extension for browsers

// Create store
const store = createStore(reducer, compose(middleware, reduxDevTool));
export default store;