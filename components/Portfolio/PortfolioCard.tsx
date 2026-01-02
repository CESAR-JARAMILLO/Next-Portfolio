"use client";
import { useState, useEffect, useRef } from "react";
import { Box, Paper, Text, Title } from "@mantine/core";
import classes from "./PortfolioCard.module.css";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [isVisible]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.cardLink}
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
