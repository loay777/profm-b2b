

import Hero from "../pages/Hero";
import { Partners } from "../pages/Parteners.jsx";
import Stats from "../components/ui/stats.jsx";
import Services from "../pages/OurServices.jsx";
import Management from "../pages/Management.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer.jsx";




export default function Root() {
 
    return (
      <div className="bg-primary">
        
        <Hero/>
        <Stats/>
        <Services/>
        <Management />
        <Partners />
        <ContactUs/>
        
      </div>
    );
  }