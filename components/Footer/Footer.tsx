"use client";

import {
  // IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  // IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Image, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import Link from "next/link";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src="/logo.svg" alt="Cesar J Dev" />
          </Link>
          <Text size="xs" c="dimmed" className={classes.description}>
            Web Developer with a focus on performance-driven sites and
            Klaviyo-powered email marketing.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 Cesar J Dev. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <a
            href="https://www.linkedin.com/in/cesar-jaramillo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Cesar Jaramillo on LinkedIn"
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a
            href="https://github.com/CESAR-JARAMILLO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Cesar Jaramillo's GitHub profile"
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
