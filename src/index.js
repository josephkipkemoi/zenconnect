import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Therapists from './pages/Therapists';
import Features from './pages/Features';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/therapists",
    element: <Therapists/>,
  },
  {
    path: "/features",
    element: <Features/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
  {
    path: "/resources",
    element: <Resources/>,
  },
  {
    path: "/community",
    element: <Community/>,
  },
  {
    path: "/register",
    element: <Register/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
