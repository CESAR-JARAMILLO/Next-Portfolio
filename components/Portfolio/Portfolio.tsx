import { Box, Text, Title } from "@mantine/core";
import PortfolioCard from "./PortfolioCard";
import classes from "./Portfolio.module.css";

const portfolioProjects = [
  {
    image: "/bizmorph.png",
    title: "Bizmorph: Marketing Agency",
    category: "Wordpress",
    link: "https://bizmorph.com/",
  },
  {
    image: "/shopify.png",
    title: "Gymshark: Shopify Store",
    category: "Shopify",
    password: "gymshark",
    link: "https://gymsharkclothing.myshopify.com/",
  },
  {
    image: "/coinbase.png",
    title: "Coinbase: Landing Page Clone",
    category: "HTML/CSS",
    link: "https://coinbase-clone-bhs6njgl7-cesarjaramillos-projects.vercel.app/",
  },
  {
    image: "/clothing-shop.png",
    title: "Saks Fifth Avenue: Clothing Store",
    category: "HTML Email",
    link: "https://cesar-jaramillo.github.io/clothing-shop-email/",
  },
  {
    image: "/waves.png",
    title: "Waves: Music Streaming Service",
    category: "HTML Email",
    link: "https://cesar-jaramillo.github.io/waves-email/",
  },
  {
    image: "/ecamm-zoom.png",
    title: "Ecamm-Zoom: Video Conferencing",
    category: "HTML Email",
    link: "https://cesar-jaramillo.github.io/ecamm-email/",
  },
];

const Portfolio = () => {
  return (
    <Box className={classes.portfolioSection}>
      <Title order={2} className={classes.title}>
        My{" "}
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Recent
        </Text>{" "}
        Projects
      </Title>
      <Box className={classes.cardsGrid}>
        {portfolioProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            image={project.image}
            title={project.title}
            category={project.category}
            password={project.password}
            link={project.link}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
