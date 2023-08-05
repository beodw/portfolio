import React, { Suspense, lazy, useEffect } from "react";
import RenderIfVisible from "react-render-if-visible";
import { PageLoader } from "./components";
import { navigateToProjects } from "./utils/navigate";
import { useDispatch, useSelector } from "react-redux";
import { setScrollDistance } from "../src/redux/app/appSlice";
import ProjectModal from "./components/ProjectModal";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  const appState = useSelector((state) => state.app);
  const dispatch = useDispatch();



  //scroll to projects on initial page load.
  // useEffect(() => {
  //   function listenForDocReady(e) {
  //     if(document.readyState == 'complete'){
  //       navigateToProjects();
  //     }
  //   }
  //   document.addEventListener('readystatechange', listenForDocReady);
  //   return () =>{
  //     document.removeEventListener('readystatechange', listenForDocReady, true);
  //   }
  // }, []);

  //useEffect to click projects link after page load.
  // useEffect(() => {
  //   window.addEventListener("scroll", function (e) {
  //     let scrollDist = document.getElementsByTagName("html")[0].scrollTop;
  //     dispatch(setScrollDistance(scrollDist));
  //   });
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (appState.scrollDist && appState.scrollDist > 0)
  //       window.scroll(0, appState.scrollDist);
  //   }, 2000);
  // }, [appState.modalIsVisible]);

  return (
    <>
      {appState.modalIsVisible ? (
        <ProjectModal />
      ) : (
        <div className="overflow-clip place-items-center">
          <div className="absolute z-0 bg-primary top-0 left-0 w-screen">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />

            
                <Hero />
        
            </div>

            <Works />

            <About />

            <div className="relative z-0">
              <Contact />

             
                <StarsCanvas />
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
