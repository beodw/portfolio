import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { click } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useDispatch } from "react-redux";
import { setModalVisible, setShowCasedProject } from "../redux/app/appSlice";
import RenderIfVisible from "react-render-if-visible";
import { noScoll } from "../utils/navigate";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  carousel_images,
  liveSiteLink,
}) => {
  const dispatch = useDispatch();

  const clickSound = new Audio(click);
  const handleClick = () => {
    clickSound.play();
    dispatch(setModalVisible(true));
    dispatch(
      setShowCasedProject({
        image: image,
        name: name,
        description: description,
        tags: tags,
        source_code_link: source_code_link,
        liveSiteLink: liveSiteLink,
        carousel_images: carousel_images,
      })
    );
  };

  // To Do
  // Add motion.div for 3d interactivity
  //Removed because of render bug on mobile i.e. not showing up on mobile

  //  <motion.div
  //    onClick={handleClick}
  //    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  //    id="projects"
  //  ></motion.div>;

  return (
    <div
      // options={{
      //   max: 45,
      //   scale: 1,
      //   speed: 450,
      // }}
      onClick={handleClick}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-110 hover:cursor-pointer duration-150"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5 text-justify">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = ({ setModal }) => {
  // To Do add nice motion transition. Removed because of render issue on mobile.
  // <motion.div variants={textVariant()}></motion.div>;
  // To do
  // <motion.p
  //         variants={fadeIn("", "", 0.1, 1)}
  //         className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
  //       ></motion.p>
  return (
    <>
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>

      <div className="w-full flex">
        Following projects showcases my skills and experience through some
        interesting projects I've woked on. Each project is briefly described
        with links to the live sites. It reflects my
        ability to create world class web applications, work with in a variety of industries, and
        manage projects to completion.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
