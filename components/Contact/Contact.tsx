"use client";

import { Box, Title, Group, ActionIcon, Text } from "@mantine/core";
import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./Contact.module.css";
import { usePostHogTracking } from "@/hooks/usePostHogTracking";

const Contact = () => {
  const { trackLinkClick } = usePostHogTracking();

  const handleEmailClick = () => {
    trackLinkClick("contact_email", "mailto:cesarjdev@gmail.com", {
      contact_method: "email",
      location: "contact_section",
    });
  };

  const handleLinkedInClick = () => {
    trackLinkClick(
      "contact_linkedin",
      "https://www.linkedin.com/in/cesar-jaramillo-dev/",
      {
        contact_method: "linkedin",
        location: "contact_section",
      }
    );
  };

  return (
    <Box className={classes.contactContainer}>
      <Box className={classes.form}>
        <Title order={2} className={classes.title}>
          Let's Connect
        </Title>
        <Text className={classes.description}>
          Feel free to reach out via email or connect with me on LinkedIn.
        </Text>
        <Group className={classes.iconGroup}>
          <a
            className={classes.link}
            href="mailto:cesarjdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Cesar Jaramillo"
            onClick={handleEmailClick}
          >
            <ActionIcon className={classes.icon}>
              <IconMail />
            </ActionIcon>
          </a>
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/cesar-jaramillo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Cesar Jaramillo on LinkedIn"
            onClick={handleLinkedInClick}
          >
            <ActionIcon className={classes.icon}>
              <IconBrandLinkedin />
            </ActionIcon>
          </a>
        </Group>
      </Box>
    </Box>
  );
};

export default Contact;
