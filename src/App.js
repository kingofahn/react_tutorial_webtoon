import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Login from './container/Login';
import Main from "./container/Main";
import WebtoonHome from "./container/WebtoonHome";
import Viewer from "./container/Viewer";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/main" component={Main} />
                    <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
                    <Route path="/viewer/:episodeId" component={Viewer} />
                </div>
            </Router>
        );
    }
}

export default App;
