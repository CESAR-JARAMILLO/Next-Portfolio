import React from "react";
import { Box, Text, Title, Image, Container } from "@mantine/core";
import classes from "./About.module.css";

const About = () => {
  return (
    <Box className={classes.aboutOuterContainer}>
      <Container size="xl" className={classes.aboutInnerContainer}>
        <Box className={classes.imageWrapperDesktop}>
          <Image
            src="/cesar-baldy.jpg"
            alt="Cesar Jaramillo"
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
              Email Developer & Marketing Specialist
            </Text>
          </Title>

          <Box className={classes.imageWrapperMobile}>
            <Image
              src="/cesar-baldy.jpg"
              alt="Cesar Jaramillo"
              className={classes.aboutImage}
            />
          </Box>

   <Text mt={16}>
            <strong>Email Developer Specializing in Klaviyo:</strong> I design
            and build high-performing email marketing campaigns with Klaviyo,
            helping businesses increase engagement and drive sales through
            personalized email strategies.
          </Text>

          <Text mt={16}>
            <strong>Automated Email Flows & Segmentation:</strong> I create
            data-driven automated email workflows, including welcome sequences,
            abandoned cart recovery, and post-purchase follow-ups, tailored to
            enhance customer experience and maximize conversions.
          </Text>

          <Text mt={16}>
            <strong>Custom Email Template Development:</strong> I craft
            responsive, visually appealing email templates optimized for all
            devices and email clients, ensuring brand consistency and high
            deliverability.
          </Text>

        </Box>
      </Container>
    </Box>
  );
};

export default About;
