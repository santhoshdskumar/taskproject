import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Homepage from './Pages/Homepage';
import Signup from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/common.css';
const  App =() => {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/logout">
            <Logout />
        </Route>
      <Route path="/weather">
          <Homepage />
      </Route>
      <Route exact path="/signup">
          <Signup />
        </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
