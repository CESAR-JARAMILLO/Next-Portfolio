import { Button, Container, Text, Title, Image } from "@mantine/core";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.imageContainer}>
            <Image
              src="/cesar2.svg"
              alt="Cesar Jaramillo"
              className={classes.profileImage}
            />
          </div>

          <div className={classes.content}>
            <Title order={1} className={classes.title}>
              Hi, I'm Cesar Jaramillo{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}
              >
                Email Developer
              </Text>{" "}
            </Title>

            <Text className={classes.description} mt={30}>
              Specializing in Frontend Development with Proficiency in Email
              Marketing and CMS Solutions
            </Text>

            <div className={classes.buttonGroup}>
              <Button
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}
                size="xl"
                className={classes.control}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="xl"
                className={classes.secondaryControl}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
