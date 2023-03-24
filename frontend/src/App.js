import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaCodeBranch } from 'react-icons/fa';
import Header from './components/Header';
import EndpointList from './components/EndpointList';
import EndpointDetails from './components/EndpointDetails';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <ProtectedRoute exact path="/" component={EndpointList} />
            <ProtectedRoute
              exact
              path="/endpoints/:id"
              component={EndpointDetails}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
        <footer>
          <p>
            Made with <FaCodeBranch /> by ARA.IO
          </p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
