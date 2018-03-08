import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { configureStore, history } from './store/configureStore'
import db from './db'

const store = configureStore()
db()

ReactDOM.render(
    <App store={store} history={history} />,
  document.getElementById('root')
);