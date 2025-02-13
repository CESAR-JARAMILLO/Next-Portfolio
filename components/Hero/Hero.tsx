"use client";

import { Button, Container, Text, Title, Image, Box } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Hero.module.css";

const Hero = () => {
  const handleVideoClick = () => {
    console.log("Open intro video modal here.");
  };

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.imageContainer}>
            <Image
              src="/cesar2.svg"
              alt="Cesar Jaramillo"
              className={classes.profileImage}
            />
          </div>

          <div className={classes.content}>
            <Title order={1} className={classes.title}>
              Hi, I'm Cesar Jaramillo{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}
              >
                Email Developer
              </Text>{" "}
            </Title>

            <Text className={classes.description} mt={30}>
              Specializing in Frontend Development with Proficiency in Email
              Marketing and CMS Solutions
            </Text>

            <Box className={classes.buttonGroup}>
              <Link href="#contact" passHref>
                <Button
                  variant="gradient"
                  gradient={{ from: "red", to: "yellow" }}
                  size="xl"
                  className={classes.control}
                >
                  Contact Me
                </Button>
              </Link>

              <Button
                variant="outline"
                size="xl"
                className={classes.secondaryControl}
                onClick={handleVideoClick}
              >
                <IconPlayerPlay className={classes.icon} size={24} />
                Watch Intro Video
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
