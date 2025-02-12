"use client";
import { useState, useEffect, useRef } from "react";
import { Box, Paper, Text, Title } from "@mantine/core";
import classes from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

const PortfolioCard = ({ image, title, category }: PortfolioCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Paper
      ref={cardRef}
      shadow="md"
      className={`${classes.card} ${isVisible ? classes.isVisible : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Box className={classes.textContainer}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </Box>
    </Paper>
  );
};

export default PortfolioCard;
