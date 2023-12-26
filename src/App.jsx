import { useState, useEffect } from 'react'
// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './pages/error-page';
import About from './pages/about';
import '@mantine/core/styles.css';
import { useTranslation } from 'react-i18next';
import Navbar from './components/ui/navbar';
import { MantineProvider } from '@mantine/core';
function App() {
  const [ t,i18n ] = useTranslation();
  useEffect(() =>{ document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
}, [i18n.language]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage/>
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  // const theme = createTheme({
  //   /** Your theme override here */
  // });
  

  return (
    <>
      <MantineProvider>
        <Navbar/>
        <RouterProvider router={router}/>
      </MantineProvider>
        
    
    </>
  )
}

export default App
