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
              About
            </Text>
            <Text color="#282938" fontSize="40px" fontWeight="700" pb="20px">
              About Me
            </Text>
            <Text color="#1C1E53">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
              <Text color="#1c1e53" paddingTop="20px">
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                lorem mi a, euismod risus r.
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
