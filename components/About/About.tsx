import React from "react";
import { Box, Text, Title, Image, Container } from "@mantine/core";
import classes from "./About.module.css";

const About = () => {
  return (
    <Box className={classes.aboutOuterContainer}>
      <Container size="xl" className={classes.aboutInnerContainer}>
        <Box className={classes.imageWrapperDesktop}>
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

          <Box className={classes.imageWrapperMobile}>
            <Image
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              alt="About me"
              className={classes.aboutImage}
            />
          </Box>

          <Text mt={16}>
            <strong>Email Developer Specializing in Klaviyo:</strong> I
            specialize in creating high-performing email marketing campaigns
            using Klaviyo. I help businesses maximize engagement and conversions
            through strategic email solutions.
          </Text>

          <Text mt={16}>
            <strong>Advanced Email Automation & Segmentation:</strong> I design
            and implement automated email flows tailored to customer behavior.
            This includes welcome series, abandoned cart reminders, and
            re-engagement sequences.
          </Text>

          <Text mt={16}>
            <strong>Custom Email Template Development:</strong> I build
            responsive, visually appealing email templates that work across all
            devices and clients. My templates follow best practices for branding
            and performance.
          </Text>

          <Text mt={16}>
            <strong>CMS & Custom Web Development:</strong> I work extensively
            with platforms like Shopify and WordPress to build and manage
            content-driven websites. My coding skills allow me to implement
            custom changes, optimize performance, and utilize APIs to extend
            functionality beyond standard capabilities.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
