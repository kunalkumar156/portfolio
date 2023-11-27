import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function AboutMe() {
  return (
    <>
      <Container maxW="1200" mt="3rem" mb="3rem">
        <Flex alignItems="center" justifyContent="center" gap="30px">
          <Box width="90%">
            {" "}
            <Image src="aboutme.png" alt="About me image" />
          </Box>
          <Box width="90%" padding="1rem 5rem">
            <Text fontWeight="600" color="#282938" pb="10px">
              About Me
            </Text>
            <Text color="#282938" fontSize="40px" fontWeight="700" pb="20px">
              Hi, I'm Kunal
            </Text>
            <Text color="#1C1E53">
              I'm a web developer specializing in front-end technologies with a
              diverse set of skills and experiences. My journey in web
              development has been enriched by working with various tools and
              frameworks.
              <Text color="#1c1e53" paddingTop="20px">
                I am well-versed in building responsive and accessible user
                interfaces using Chakra UI and Material-UI. My proficiency
                extends to collaborating with design teams, where I leverage
                tools like Figma and Canva to bring creative concepts to life.
              </Text>
              <Text color="#1c1e53" paddingTop="20px">
                In addition, I am comfortable working in a Linux environment,
                ensuring smooth development workflows. I am always eager to
                explore new technologies and frameworks to enhance my skills and
                deliver high-quality web applications.
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default AboutMe;
("");
