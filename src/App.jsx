import React, { Suspense, lazy, useEffect } from "react";
import RenderIfVisible from "react-render-if-visible";
import { PageLoader } from "./components";
import { navigateToProjects } from "./utils/navigate";
import { useSelector } from "react-redux";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Works = lazy(() => import("./components/Works"));
const ProjectModal = lazy(() => import("./components/ProjectModal"));

const App = () => {
  const appState = useSelector((state) => state.app);

  //useEffect to click projects link after page load.
  useEffect(() => {
    setTimeout(() => {
      navigateToProjects();
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigateToProjects();
    }, 1000);
  }, [appState.modalIsVisible]);

  return (
    <Suspense fallback={<PageLoader />}>
      {appState.modalIsVisible ? (
        <ProjectModal />
      ) : (
        <div className="overflow-clip place-items-center">
          <div className="absolute z-0 bg-primary top-0 left-0 w-screen">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />

              <RenderIfVisible>
                <Hero />
              </RenderIfVisible>
            </div>

            <Works />

            <About />

            <div className="relative z-0">
              <Contact />

              <RenderIfVisible>
                <StarsCanvas />
              </RenderIfVisible>
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default App;
