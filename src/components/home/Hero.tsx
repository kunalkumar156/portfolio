import { Container, Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <>
      <Box bg="#F5FCFF">
        <Container maxW="1200" padding="3rem 0">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Text
                color="#282938"
                fontWeight="600"
                fontSize="21px"
                lineHeight="150%"
                pb="12px"
              >
                Hi, I&apos;m Kunal
              </Text>
              <Text
                color="#282938"
                fontWeight="700"
                fontSize="45px"
                lineHeight="120%"
                pb="12px"
              >
                I am a{" "}
                <Text as="span" color="#5E3BEE" fontWeight="inherit">
                  Web Developer.
                </Text>{" "}
                Crafting Seamless Front-End Experiences
              </Text>

              <Text
                color="#282938"
                fontWeight="400"
                fontSize="16px"
                width="75%"
                pb="2rem"
              >
                Transforming ideas into visually stunning and intuitive web
                interfaces and Passionate about creating beautiful user
                experiences with the latest web technologies.{" "}
                <Text as="span" color="#5E3BEE" fontWeight="600">
                  Let&apos;s bring your projects to life!
                </Text>
              </Text>

              <button className="opposite-button">Get In Touch</button>
            </Box>

            <Box width="100%">
              <Image bg="#F5FCFF" src="heroImage.png" alt="hero Image" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
