import React from "react";
import { Box, Text, Title, Image, Container } from "@mantine/core";
import classes from "./About.module.css";

const About = () => {
  return (
    <Box className={classes.aboutOuterContainer}>
      <Container size="xl" className={classes.aboutInnerContainer}>
        <Box className={classes.imageWrapperDesktop}>
          <Box className={classes.imageCollage}>
            <Image
              src="/cesar-birthday.jpg"
              alt="Cesar Jaramillo"
              className={classes.collageImage1}
            />
            <Image
              src="/oc-marathon-2025.jpg"
              alt="Cesar Jaramillo"
              className={classes.collageImage2}
            />
            <Image
              src="/cesar-guitar.jpg"
              alt="Cesar Jaramillo"
              className={classes.collageImage3}
            />
            <Image
              src="/cesar-baldy.jpg"
              alt="Cesar Jaramillo"
              className={classes.collageImage4}
            />
          </Box>
        </Box>

        <Box className={classes.textContent}>
          <Title order={2} className={classes.title}>
            Hi, Here's A Little{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "red", to: "yellow" }}
            >
              About Me
            </Text>
          </Title>

          <Box className={classes.imageWrapperMobile}>
            <Box className={classes.mobileImageCollage}>
              <Image
                src="/cesar-baldy.jpg"
                alt="Cesar Jaramillo"
                className={classes.mobileCollageImage1}
              />
              <Image
                src="/cesar-baldy.jpg"
                alt="Cesar Jaramillo"
                className={classes.mobileCollageImage2}
              />
              <Image
                src="/cesar-baldy.jpg"
                alt="Cesar Jaramillo"
                className={classes.mobileCollageImage3}
              />
              <Image
                src="/cesar-baldy.jpg"
                alt="Cesar Jaramillo"
                className={classes.mobileCollageImage4}
              />
            </Box>
          </Box>

          <Text className={classes.introText} mt={16}>
            A Web and Email Developer based in Los Angeles, California.
          </Text>

          <Text className={classes.bodyText} mt={20}>
            With over 4 years of experience, I specialize in using code and
            digital tools to help businesses grow through effective websites and
            email marketing solutions. I'm passionate about solving problems,
            building scalable systems, and creating experiences that drive
            results.
          </Text>

          <Text className={classes.bodyText} mt={16}>
            I'm also a man of God who prioritizes faith, family, and purpose in
            everything I do. My work is driven by a desire to serve others with
            integrity and intention.
          </Text>

          <Text className={classes.bodyText} mt={16}>
            Outside of work, I enjoy coding for fun, exploring new technologies,
            and constantly sharpening my skills with side projects. When I'm not
            at the keyboard, you'll likely find me outdoors training for
            marathons, spending time with loved ones, or relaxing with my
            classical guitar and favorite pieces of classical music.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
