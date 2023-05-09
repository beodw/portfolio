import React, {Suspense, useEffect} from "react";
import { lazy } from "react";

const StarsCanvas = lazy(()=> import("./components/canvas/Stars"));
const About = lazy(()=> import("./components/About"));
const Contact = lazy(()=> import("./components/Contact"));
const Hero = lazy(()=> import("./components/Hero"));
const Navbar = lazy(()=> import("./components/Navbar"));
const Works = lazy(()=> import("./components/Works"));

const App = () => {


  useEffect(()=>{
    setTimeout(()=>{
      document.querySelectorAll("a")[1].click();
    }, 3000);
  }, []);
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <div className='relative z-0'>
           <Suspense fallback={<div>loading..</div>}>
              <Contact />
          </Suspense>
         
          <Suspense fallback={<div>loading..</div>}>
              <StarsCanvas />
          </Suspense>
  
        </div>
      </div>
  );
}

export default App;
