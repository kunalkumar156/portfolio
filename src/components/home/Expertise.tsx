import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

import { FaJs, FaSass, FaNpm } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function MySkills({
  IconComponent,
  heading,
  para,
}: {
  IconComponent: React.ComponentType;
  heading: string;
  para: string;
}) {
  return (
    <Box
      width="25%"
      bg="#F5FCFF"
      padding="32px"
      borderRadius="10px"
      _hover={{
        borderBottom: "2px solid #5E3BEE",
        transition: "border-bottom 0.1s ease, color 0.1s ease",
      }}
    >
      <Box
        fontSize="35px"
        color="#016b6b"
        background="white"
        borderRadius="5px"
        boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.10)"
        width="fit-content"
        height="fit-content"
        padding="3"
      >
        <IconComponent />
      </Box>
      <Text fontSize="22px" fontWeight="700" mt="3" mb="3" color="#282938">
        {heading}
      </Text>
      <Text color="#1C1E53" fontWeight="600" fontSize="14px">
        {para}
      </Text>
    </Box>
  );
}

function Expertise() {
  return (
    <>
      <Container maxW="1200" padding="3rem 0">
        <Text fontWeight="600" color="#282938" pb="10px">
          My Skills
        </Text>
        <Text color="#282938" fontSize="40px" fontWeight="700" pb="20px">
          My Expertise
        </Text>

        <Box display="flex" justifyContent="space-around" gap="32px">
          <MySkills
            key="Javascript"
            IconComponent={FaJs}
            heading="JavaScript"
            para="Building interactive and dynamic web applications."
          />
          <MySkills
            key="Next.js"
            IconComponent={TbBrandNextjs}
            heading="Next.js"
            para="Building server-side rendered and statically generated React applications."
          />

          <MySkills
            key="UIlibs"
            IconComponent={FaNpm}
            heading="UI Libraries"
            para="Experience with various UI libraries and component ecosystems."
          />
          <MySkills
            key="sass"
            IconComponent={FaSass}
            heading="SASS"
            para="Styling web applications with the power of SASS preprocessor."
          />
          <MySkills
            key="tailwind"
            IconComponent={SiTailwindcss}
            heading="Tailwind CSS"
            para="Utilizing utility-first CSS framework for efficient styling."
          />
        </Box>
      </Container>
    </>
  );
}

export default Expertise;
