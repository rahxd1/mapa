import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Header';
import './assets/css/App.css';
import Nav from './components/Nav';
import Home from './containers/HomePage'; 
import My404Component from './containers/NotFoundPage';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route path='/*' exact component={My404Component}  status={404}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;