import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt:18000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 400, createdAt: 15000 }));
// store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000}));
// store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000}));

const jsx = (
  <Provider store={store}>
    <AppRouter />  
  </Provider>

);

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  })


