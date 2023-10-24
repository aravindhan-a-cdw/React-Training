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

/*
	@author Aravindhan A
	@description This file is the entry point of the application
*/

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

reportWebVitals();
