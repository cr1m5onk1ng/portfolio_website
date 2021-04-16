import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed';
import Widgets from './Widgets';
import ArticleList from './ArticleList';
import Resume from './Resume';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="app__body">
              <Sidebar/>
              <ArticleList/>
              <Widgets/>
            </div>
          </Route>
          <Route exact path="/resume">
            <Header />
            <div className="app__body">
              <Sidebar/>
              <Resume/>
              <Widgets/>
            </div>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
