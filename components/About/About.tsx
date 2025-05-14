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
              Ecommerce Developer & Email Marketing Specialist
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
            <strong>Ecommerce Development & Optimization:</strong> I design and optimize high-performing Shopify, WooCommerce, and CMS storefronts, blending clean development practices with SEO, responsive design, and conversion-focused strategies.
          </Text>
          
          <Text mt={16}>
            <strong>Shopify Theme Customization & UX Enhancements:</strong> I build and customize themes to deliver seamless mobile experiences, intuitive navigation, and high-converting product and landing pages.
          </Text>
          
          <Text mt={16}>
            <strong>Email Marketing & Klaviyo Automation:</strong> I craft personalized, data-driven email marketing campaigns and automated flows—such as welcome sequences, abandoned cart recovery, and post-purchase follow-ups—to boost customer engagement and retention.
          </Text>
          
          <Text mt={16}>
            <strong>Custom Email Template Development:</strong> I develop responsive, brand-aligned email templates that perform across all devices and clients, enhancing deliverability, engagement, and conversion rates.
          </Text>

        </Box>
      </Container>
    </Box>
  );
};

export default About;
