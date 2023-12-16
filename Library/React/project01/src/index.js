import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import UserContextProvider from './components/Context/UserContextProvider';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </UserContextProvider>
);

