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
}) => {
  const dispatch = useDispatch();

  const clickSound = new Audio(click);
  const handleClick = () => {
    clickSound.play();
    // dispatch(setModalVisible(true));
    // dispatch(
    //   setShowCasedProject({
    //     image: image,
    //     name: name,
    //     description: description,
    //     tags: tags,
    //     source_code_link: source_code_link,
    //     liveSiteLink: "https://lng.com.sg",
    //     carousel_images: [],
    //   })
    // );
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      id="projects"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
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
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ setModal }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          Following projects showcases my skills and experience through some
          interesting projects I've woked on. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
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
