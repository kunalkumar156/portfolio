import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function AboutMe() {
  return (
    <Container maxW="1200" mb="3rem" id="aboutme">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "center" }}
        justifyContent="center"
        gap={{ base: "20px", md: "30px" }}
      >
        <Box width={{ base: "90%", md: "50%" }}>
          <Image src="aboutme.png" alt="About me image" />
        </Box>
        <Box
          width={{ base: "90%", md: "55%" }}
          padding={{ base: "1rem", md: "5rem" }}
        >
          <Text fontWeight="600" color="#282938" pb="10px">
            About Me
          </Text>
          <Text
            color="#282938"
            fontSize={{ base: "32px", md: "40px" }}
            fontWeight="700"
            pb="20px"
          >
            Kunal here
          </Text>
          <Text color="#1C1E53">
            I&apos;m a web developer specializing in front-end technologies with
            a diverse set of skills and experiences. My journey in web
            development has been enriched by working with various tools,
            frameworks, and component library that i am building - AuraUI.
            <Text color="#1c1e53" paddingTop="20px">
              I am well-versed in building responsive and accessible user
              interfaces using AuraUI, Chakra UI, and Material-UI. My
              proficiency extends to collaborating with design teams, where I
              leverage tools like Figma and Canva to bring creative concepts to
              life.
            </Text>
            <Text color="#1c1e53" paddingTop="20px">
              In addition, I am comfortable working in a Linux environment,
              ensuring smooth development workflows. I am always eager to
              explore new technologies and frameworks, including AuraUI, to
              enhance my skills and deliver high-quality web applications.
            </Text>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default AboutMe;
