import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About";
import "@mantine/core/styles.css";
import { useTranslation } from "react-i18next";
import Navbar from "./components/ui/navbar";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/ui/footer.jsx";
import { motion } from "framer-motion";
import  CleaningServicesPage  from "./pages/services/CleaningServicesPage.jsx";
import FloatingActionBtn from "./components/ui/floating-action-button.jsx";
import { zoomIn } from "./utils/motion.js";

function App() {
  const [t, i18n] = useTranslation();
  
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <MantineProvider forceColorScheme="light">
      <Navbar />
        <motion.div variants={zoomIn(0,1)} className={"z-[51] fixed right-9 bottom-9"}>
          <FloatingActionBtn />
        </motion.div>
        <Root />
        <div className=" bottom-0 w-full"><Footer /></div>
      </MantineProvider>
    </>
  );
}

export default App;
