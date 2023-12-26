import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";
import Hero from "../pages/Hero";
import Home from "../pages/home";

export default function Root() {
    return (
      <>
         <div className='relative z-0 bg-primary'>
         <Navbar />
          <Hero/>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
         
        <Home /> 
        </div>
        
       
          
        
      </div>
      </>
    );
  }