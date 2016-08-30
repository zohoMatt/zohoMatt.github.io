/**
 * Created by Zoho on 16/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';


import Home from './components/Home'
import Contact from './components/Contact'


const home = document.getElementById('homepage');
ReactDOM.render(<Home/>, home);


const contact = document.getElementById('contact');
ReactDOM.render(<Contact/>, contact);