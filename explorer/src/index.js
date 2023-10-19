import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Details from './pages/Details';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Error from './pages/Error';
import PageLayout from './layouts/PageLayout';
import Service from './services/placesService';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/place/:place",
        element: <Details/>,
        loader: async ({params}) => {
          return {
            placeData: {
              ...await Service.getPlaceDetails(params.place),
              temperature: await Service.getWeather(params.place)
            },
            relatedPlaces: await Service.getSimilarPlaces(params.place),
            allPlacesData: await Service.getAllPlaces()
          };
        }
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
    <RouterProvider fallbackElement={<p>Loading</p>} router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
