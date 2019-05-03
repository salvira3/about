import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { Work } from './screens/Work';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container-fluid px-0">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" exact component={Work} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
