import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import Widgets from './components/Widgets';
import ArticleList from './components/ArticleList';
import Resume from './components/Resume';
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
