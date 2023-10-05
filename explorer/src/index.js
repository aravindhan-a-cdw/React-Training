import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Details from './pages/Details';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/place/:place",
        element: <Details/>
      },
      {
        path: "",
        element: <Home />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
