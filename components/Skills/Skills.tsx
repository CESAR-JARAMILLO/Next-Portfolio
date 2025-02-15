import React from "react";
import Image from "next/image";
import { Box } from "@mantine/core";
import classes from "./Skills.module.css";

// Skills object with SVG paths
const skills = [
  { icon: "/klaviyo.svg" },
  { icon: "/shopify.svg" },
  { icon: "/wordpress.svg" },
  { icon: "/canva.svg" },
  { icon: "/photoshop.svg" },
  { icon: "/figma.svg" },
  { icon: "/chatgpt.svg" },
  { icon: "/litmus.svg" },
  { icon: "/html.svg" },
  { icon: "/css.svg" },
  { icon: "/sass.svg" },
  { icon: "/javascript.svg" },
  { icon: "/python.svg" },
];

const Skills = () => {
  return (
    <Box className={classes.skillsOuterContainer}>
      <Box className={classes.skillsSlider}>
        <Box className={classes.skillsTrack}>
          {/* Duplicate icons for infinite scrolling effect */}
          {[...skills, ...skills].map((skill, index) => (
            <Image
              key={index}
              src={skill.icon}
              alt="Skill Icon"
              width={80}
              height={80}
              className={classes.skillIcon}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
