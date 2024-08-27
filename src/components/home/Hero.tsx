import { Container, Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Box bg="#F5FCFF">
      <Container maxW="1200" padding={{ base: "1rem", md: "3rem 0" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <Box
            pb={{ base: "2rem", md: 0 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              color="#282938"
              fontWeight="600"
              fontSize={{ base: "18px", md: "21px" }}
              lineHeight="150%"
              pb="12px"
            >
              Hi, I&apos;m Kunal
            </Text>
            <Text
              color="#282938"
              fontWeight="700"
              fontSize={{ base: "30px", md: "45px" }}
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
              fontSize={{ base: "14px", md: "16px" }}
              width={{ base: "100%", md: "75%" }}
              pb="2rem"
            >
              Transforming ideas into visually stunning and intuitive web
              interfaces and Passionate about creating beautiful user
              experiences with the latest web technologies.{" "}
              <Text as="span" color="#5E3BEE" fontWeight="600">
                Let&apos;s bring your projects to life!
              </Text>
            </Text>

            <Link href="#contactme">
              <button className="opposite-button">Get In Touch</button>
            </Link>
          </Box>

          <Box width="100%">
            <Image
              bg="#F5FCFF"
              src="heroillustration.png"
              alt="hero Image"
              mb={{ base: "2rem", md: 0 }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;
