import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './services/i18n/i18n.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage.jsx";
import { useTranslation } from "react-i18next";
import  CleaningServicesPage  from "./pages/services/CleaningServicesPage.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cleaningservices",
    element: <CleaningServicesPage />,
    errorElement:<ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
