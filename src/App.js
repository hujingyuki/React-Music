import React, { Component } from 'react';
import '@/assets/css/App.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { appRouter } from './router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  appReducer from './store';

const store = createStore(appReducer);

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Link to='/Main' className="App-link">路由列表</Link>
              { renderRoutes(appRouter) }
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;