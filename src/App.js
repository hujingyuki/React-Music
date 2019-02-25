import React, { Component } from 'react';
import '@/assets/css/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { appRouter } from './router';
import PCApp from './components';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  appReducer from './store';

const store = createStore(appReducer);

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <Router>
          <PCApp>
            {renderRoutes(appRouter)}
          </PCApp>
        </Router>
      </Provider>
    );
  }
}

export default App;