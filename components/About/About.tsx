import React from "react";
import { Box, Text, Title, Image, Container } from "@mantine/core";
import classes from "./About.module.css";

const About = () => {
  return (
    <Box className={classes.aboutOuterContainer}>
      <Container size="xl" className={classes.aboutInnerContainer}>
        <Box className={classes.imageWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
            alt="About me"
            className={classes.aboutImage}
          />
        </Box>
        <Box className={classes.textContent}>
          <Title order={2} className={classes.title}>
            Experienced{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "red", to: "yellow" }}
            >
              Web & Email
            </Text>{" "}
            Developer
          </Title>
          <Text>
            I'm Cesar Jaramillo, a Web Developer based in Los Angeles,
            California with over 4 years of experience. My expertise lies in
            email marketing, content management with various CMS systems, and
            building responsive pages using custom code. I pride myself on
            tailoring solutions to my clients' specific needs, selecting the
            best methods and technologies for each project. Whether working as
            part of a team or independently, I have a track record of resolving
            challenges efficiently and effectively, ensuring the highest level
            of client satisfaction.
          </Text>
          <Text mt={16}>
            In my free time, you'll often find me embracing an active
            lifestyle—whether that's hitting the gym, hiking, or exploring the
            great outdoors. Beyond that, my passion extends to the arts; I am a
            devoted classical guitar enthusiast. This blend of physical and
            artistic pursuits keeps me balanced and continually fuels my
            creative energy, enriching my professional work in content
            management and web development.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
