import React from "react";
import { fadeIn } from "../utils/motion";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisible } from "../redux/app/appSlice";
import { motion } from "framer-motion";
import { github, website } from "../assets";
import { navigateToProjects } from "../utils/navigate";
import ImageCarousel from "./ImageCarousel";

export default function ProjectModal() {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModalVisible(false));
  };
  const appState = useSelector((s) => s.app);

  // <motion.div
  //     variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
  //     className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  //   ></motion.div>
  return (
    <div
      className={`bg-transparent w-screen h-screen overflow-clip z-0 flex justify-center items-center`}
    >
      <div className="absolute h-full w-full  bg-black"></div>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex flex-col hover:scale-110 justify-between bg-tertiary opacity-100 z-20 p-5 rounded-2xl w-3/4 h-5/6 duration-150"
      >
        <div className="relative w-full">
          <div
            onClick={() =>
              window.open(appState.showCasedProject.source_code_link, "_blank")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={appState.showCasedProject.image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={
                // window.open(
                //   appState.showCasedProject.source_code_link,
                //   "_blank"
                // )
                closeModal
              }
              className="cursor-pointer"
            >
              {/* <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}

              <button className="bg-primary rounded-md text-xs px-6 py-2">
                Close
              </button>
            </div>
          </div>
        </div>

        <ImageCarousel />
        <div className="mt-5">
          <h3>Project Links:</h3>
          <div className="flex">
            <div className="flex flex-col items-start m-3 card-img_hover">
              <div
                onClick={() => {
                  window.open(appState.showCasedProject.source_code_link);
                }}
                className="mb-2 bg-green-500 shadow-lg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <small>GitHub</small>
            </div>

            <div className="flex flex-col items-start m-3 card-img_hover">
              <div
                onClick={() => {
                  window.open(appState.showCasedProject.liveSiteLink);
                }}
                className="mb-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={website}
                  alt="website link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <small>Live Site</small>
            </div>
          </div>

          <h3 className="text-white font-bold text-[24px]">
            {appState.showCasedProject.name}
          </h3>
          <p className="mt-2 text-secondary text-[12px] xs:text-[8px] sm:text-[6px] md:text-[14px] text-justify">
            {appState.showCasedProject.description}
          </p>
        </div>
        <div className="mt-4 flex flex-col flex-wrap gap-2">
          <div>Technologies Used</div>
          <div className="flex">
            {appState.showCasedProject.tags.map((tag) => (
              <span
                key={`${appState.showCasedProject.name}-${tag.name}`}
                className={`text-[14px] mr-[3px] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
