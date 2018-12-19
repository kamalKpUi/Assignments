import React, { Component } from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import UserGrid from './user-grid';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>  
        <div>
            <App/>
        </div>
      </Provider>
    )
  }
}
