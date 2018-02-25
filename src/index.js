import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { Provider } from 'react-redux'
import { configureStore, history } from './store/configureStore'

const store = configureStore()

ReactDOM.render(
    <App store={store} history={history} />,
  document.getElementById('root')
);