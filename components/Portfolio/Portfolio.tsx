import { Box, Text, Title } from "@mantine/core";
import PortfolioCard from "./PortfolioCard";
import classes from "./Portfolio.module.css";

const portfolioProjects = [
  {
    image: "/shopify.png",
    title: "E-Commerce Solutions with Shopify",
    category: "Shopify",
  },
  {
    image: "/bizmorph.png",
    title: "Email Marketing Automations",
    category: "Wordpress",
  },
  {
    image: "/coinbase.png",
    title: "Custom Websites with WordPress",
    category: "HTML/CSS",
  },
  {
    image: "/clothing-shop.png",
    title: "Modern Web Apps with Next.js",
    category: "HTML Email",
  },
  {
    image: "/waves.png",
    title: "Interactive UIs with React",
    category: "HTML Email",
  },
  {
    image: "/ecamm-zoom.png",
    title: "SEO Optimization Strategies",
    category: "HTML Email",
  },
];

const Portfolio = () => {
  return (
    <Box className={classes.portfolioSection}>
      <Title order={1} className={classes.title}>
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
          />
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
