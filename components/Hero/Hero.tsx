"use client";

import { Button, Container, Text, Title, Image, Box } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Hero.module.css";
import { usePostHogTracking } from "@/hooks/usePostHogTracking";

const Hero = () => {
  const { trackButtonClick } = usePostHogTracking();

  const handleVideoClick = () => {
    trackButtonClick("watch_intro_video", {
      location: "hero_section",
      button_type: "secondary",
    });
    console.log("Open intro video modal here.");
  };

  const handleContactClick = () => {
    trackButtonClick("contact_me", {
      location: "hero_section",
      button_type: "primary",
    });
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
                Web Dev & Automation Specialist
              </Text>{" "}
            </Title>

            <Text className={classes.description} mt={30}>
              Developing and automating websites on WordPress, Shopify, and
              custom CMS platforms — with powerful email marketing strategies
              built in using Klaviyo and Mailchimp.
            </Text>

            <Box className={classes.buttonGroup}>
              <Link href="#contact" passHref>
                <Button
                  variant="gradient"
                  gradient={{ from: "red", to: "yellow" }}
                  size="xl"
                  className={classes.control}
                  onClick={handleContactClick}
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
