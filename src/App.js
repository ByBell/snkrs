import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './config/configureRematch'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/" forceRefresh={true}>
          <CssBaseline />
            <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
