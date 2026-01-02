"use client";

import { Box, Title, Group, ActionIcon, Text } from "@mantine/core";
import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./Contact.module.css";

const Contact = () => {

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
