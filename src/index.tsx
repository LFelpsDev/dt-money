import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import {App} from './App';


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amout: 400,
          type: 'deposit',
          category: 'Food',
        },
        {
          id: 2,
          title: 'Transaction 2',
          amout: 200,
          type: 'withdraw',
          category: 'Developer'
        }
      ]      
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

