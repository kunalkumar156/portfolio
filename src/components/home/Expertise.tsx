import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

import { IoLogoWebComponent } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { MdGraphicEq } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";

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
      <Text fontSize="20px" fontWeight="700" mt="3" mb="3" color="#282938">
        {heading}
      </Text>
      <Text color="#1C1E53">{para}</Text>
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
            key="brain"
            IconComponent={IoLogoWebComponent}
            heading="Strategy & Direction"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          />
          <MySkills
            key="brain"
            IconComponent={MdDesignServices}
            heading="UI/UX Design"
            para="Creating intuitive and visually appealing user interfaces."
          />
          <MySkills
            key="brain"
            IconComponent={MdGraphicEq}
            heading="Graphic Design"
            para="Designing logos, banners, and other graphic elements."
          />
          <MySkills
            key="brain"
            IconComponent={FaProductHunt}
            heading="Product Strategy"
            para="Crafting effective strategies for product development."
          />
        </Box>
      </Container>
    </>
  );
}

export default Expertise;
