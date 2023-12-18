import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import UserContextProvider from './components/Context/UserContextProvider';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Website/Home';
import Layout from './components/Layout';
import About from './components/Website/AboutUs';
import Contact from './components/Website/ContactUs';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path: "",
        element : <Home/>
      },
      {
        path: "about",
        element : <About/>
      },
      {
        path: "contact",
        element : <Contact/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </UserContextProvider>
);

