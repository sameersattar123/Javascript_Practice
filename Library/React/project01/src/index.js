import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import UserContextProvider from './components/Context/UserContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

