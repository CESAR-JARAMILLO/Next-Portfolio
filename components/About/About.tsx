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
            I'm a passionate web developer with experience in React, Next.js,
            and modern UI frameworks. I specialize in building clean,
            responsive, and high-performance applications.
          </Text>
          <Text>
            My goal is to create digital solutions that enhance user experiences
            and help businesses grow. When I'm not coding, I'm training for my
            next marathon or creating content to inspire others.
          </Text>
          <Text>
            I'm a passionate web developer with experience in React, Next.js,
            and modern UI frameworks. I specialize in building clean,
            responsive, and high-performance applications.
          </Text>
          <Text>
            My goal is to create digital solutions that enhance user experiences
            and help businesses grow. When I'm not coding, I'm training for my
            next marathon or creating content to inspire others.
          </Text>
          <Text>
            I'm a passionate web developer with experience in React, Next.js,
            and modern UI frameworks. I specialize in building clean,
            responsive, and high-performance applications.
          </Text>
          <Text>
            My goal is to create digital solutions that enhance user experiences
            and help businesses grow. When I'm not coding, I'm training for my
            next marathon or creating content to inspire others.
          </Text>
          <Text>
            I'm a passionate web developer with experience in React, Next.js,
            and modern UI frameworks. I specialize in building clean,
            responsive, and high-performance applications.
          </Text>
          <Text>
            My goal is to create digital solutions that enhance user experiences
            and help businesses grow. When I'm not coding, I'm training for my
            next marathon or creating content to inspire others.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
