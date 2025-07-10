"use client";
import { useState, useEffect, useRef } from "react";
import { Box, Paper, Text, Title } from "@mantine/core";
import classes from "./PortfolioCard.module.css";
import { usePostHogTracking } from "@/hooks/usePostHogTracking";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  password?: string;
  link: string;
}

const PortfolioCard = ({
  image,
  title,
  category,
  password,
  link,
}: PortfolioCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { trackProjectView, trackLinkClick } = usePostHogTracking();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Track project view when it becomes visible
          trackProjectView(title, category);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [isVisible, title, category, trackProjectView]);

  const handleProjectClick = () => {
    trackLinkClick("portfolio_project", link, {
      project_name: title,
      project_category: category,
      has_password: !!password,
    });
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.cardLink}
      onClick={handleProjectClick}
    >
      <Paper
        ref={cardRef}
        shadow="md"
        className={`${classes.card} ${isVisible ? classes.isVisible : ""}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Box className={classes.textContainer}>
          <Text className={classes.category}>{category}</Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
          {password && (
            <Text className={classes.password}>
              Password: <strong>{password}</strong>
            </Text>
          )}
        </Box>
      </Paper>
    </a>
  );
};

export default PortfolioCard;
