"use client";

import { useState } from "react";
import { Burger, Container, Group, Image } from "@mantine/core";
import Link from "next/link";
import classes from "./Header.module.css";
import { usePostHogTracking } from "@/hooks/usePostHogTracking";

const links = [
  { link: "#home", label: "Home" },
  { link: "#about", label: "About" },
  { link: "#portfolio", label: "Portfolio" },
  { link: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { trackButtonClick } = usePostHogTracking();

  const handleLinkClick = (link: string, label: string) => {
    trackButtonClick("navigation_click", {
      navigation_item: label,
      navigation_link: link,
      menu_type: menuOpen ? "mobile" : "desktop",
    });
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    trackButtonClick("menu_toggle", {
      menu_state: menuOpen ? "close" : "open",
      menu_type: "mobile",
    });
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/" className={classes.logo}>
          <Image src="/logo.svg" alt="Cesar J Dev" />
        </Link>

        <Group gap={5} className={classes.desktopNav}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.link, link.label);
              }}
            >
              {link.label}
            </a>
          ))}
        </Group>

        <Burger
          color={"white"}
          className={classes.burger}
          opened={menuOpen}
          onClick={handleMenuToggle}
          size="md"
        />
      </Container>

      <div
        className={`${classes.mobileMenu} ${menuOpen ? classes.showMenu : ""}`}
      >
        <nav className={classes.menuContent}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className={classes.menuLink}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.link, link.label);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
