import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history'

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

import Header from './Header';


const App = () => {
    return (
        <div className = "ui container">
            <Router history = {history}>
                <div>
                    <Header />
                    <Route path = '/' exact component = {StreamList} />
                    <Route path = '/streams/new' component = {StreamCreate} />
                    {/* :id is a wild card param, we can add as many params as we can and can give any name */}
                    <Route path = '/streams/edit/:id' component = {StreamEdit} /> 
                    <Route path = '/streams/delete/:id' component = {StreamDelete} />
                    <Route path = '/streams/show' component = {StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App;