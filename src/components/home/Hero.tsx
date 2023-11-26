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
                Hey, I am John
              </Text>
              <Text
                color="#282938"
                fontWeight="700"
                fontSize="45px"
                lineHeight="120%"
                pb="12px"
              >
                I create{" "}
                <Text as="span" color="#5E3BEE" fontWeight="inherit">
                  product design
                </Text>{" "}
                and brand experience
              </Text>

              <Text
                color="#282938"
                fontWeight="400"
                fontSize="16px"
                width="75%"
                pb="2rem"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </Text>

              <button className="opposite-button">Get In Touch</button>
            </Box>

            <Box width="100%">
              <Image src="heroImage.png" alt="hero Image" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
