import React, {useEffect} from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

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
        {/* <Experience /> */}
        {/* <Tech /> */}
     
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default App;
