import React from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';
import CalendarList from './CalendarList/CalendarList';
import CalendarNew from './CalendarNew/CalendarNew';
import Profile from './Profile/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <CalendarList />
          </Route>
          <Route path="/new">
            <CalendarNew />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route 
            path="/calendar/:id"
            render = {props => (
              <Calendar {...props} />
            )}
          />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
