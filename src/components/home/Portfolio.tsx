import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function PortfolioCard({
  image,
  heading,
  para,
  link,
  link2,
  isGitHubDisabled,
  isProjectDisabled,
}: {
  image: string;
  heading: string;
  para: string;
  link: string;
  link2: string;
  isGitHubDisabled?: boolean;
  isProjectDisabled?: boolean;
}) {
  return (
    <MotionBox
      borderRadius="16px"
      boxShadow="0px 8px 24px rgba(0, 0, 0, 0.12)"
      overflow="hidden"
      bg="white"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Full screenshot image */}
      <Image
        src={image}
        alt={heading}
        w="100%"
        maxH="400px"
        objectFit="contain"
        borderTopRadius="16px"
        bg="gray.50"
      />

      <Box p={5}>
        <Text fontSize="20px" fontWeight="700" mb={2} color="#282938">
          {heading}
        </Text>
        <Text color="#1C1E53" fontSize="14px" mb={4} noOfLines={3}>
          {para}
        </Text>

        {/* Cute chip buttons */}
        <Flex gap={3} flexWrap="wrap">
          {/* Project Link */}
          <Box
            as="a"
            href={isProjectDisabled ? undefined : link2}
            target="_blank"
            rel="noopener noreferrer"
            px={4}
            py={2}
            bg={isProjectDisabled ? "gray.100" : "teal.50"}
            color={isProjectDisabled ? "gray.500" : "teal.700"}
            fontSize="14px"
            fontWeight="500"
            borderRadius="999px"
            display="flex"
            alignItems="center"
            gap={2}
            cursor={isProjectDisabled ? "not-allowed" : "pointer"}
            pointerEvents={isProjectDisabled ? "none" : "auto"}
            transition="all 0.2s ease"
            _hover={{
              bg: isProjectDisabled ? "gray.100" : "teal.100",
              transform: isProjectDisabled ? "none" : "translateY(-2px)",
            }}
          >
            {isProjectDisabled ? "On Development" : "View Project"}
            <RxArrowTopRight />
          </Box>

          {/* GitHub Link */}
          <Box
            as="a"
            href={isGitHubDisabled ? undefined : link}
            target="_blank"
            rel="noopener noreferrer"
            px={4}
            py={2}
            bg={isGitHubDisabled ? "gray.100" : "teal.50"}
            color={isGitHubDisabled ? "gray.500" : "teal.700"}
            fontSize="14px"
            fontWeight="500"
            borderRadius="999px"
            display="flex"
            alignItems="center"
            gap={2}
            cursor={isGitHubDisabled ? "not-allowed" : "pointer"}
            pointerEvents={isGitHubDisabled ? "none" : "auto"}
            transition="all 0.2s ease"
            _hover={{
              bg: isGitHubDisabled ? "gray.100" : "teal.100",
              transform: isGitHubDisabled ? "none" : "translateY(-2px)",
            }}
          >
            {isGitHubDisabled ? "Private Repo" : "GitHub"}
            <RxArrowTopRight />
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
}

function Portfolio() {
  return (
    <Container maxW="1200px" mt="4rem" mb="4rem" id="portfolio">
      <Text fontWeight="600" color="#282938" pb="10px">
        Recent Projects
      </Text>
      <Text
        color="#282938"
        fontSize={{ base: "32px", md: "40px" }}
        fontWeight="700"
        pb="3rem"
      >
        My Portfolio
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="32px">
        <PortfolioCard
          image="auraui.png"
          heading="AuraUI"
          para="AuraUI is a high-performance component library for building stunning and responsive React websites with ease."
          link="https://github.com/Shubham0850/auraui"
          link2="https://www.auraui.com/"
        />
        <PortfolioCard
          image="asvaventures.png"
          heading="Asva Ventures"
          para="Asva Ventures is a web 3 related platform that explores the latest advancements in web technologies. It is a freelance project done by me."
          link=""
          link2="https://asvaventures.com/"
          isGitHubDisabled
        />
        <PortfolioCard
          image="natours.png"
          heading="Natours"
          para="Natours is a nature tour packages website, providing a platform for users to explore and book various nature tours."
          link="https://github.com/kunalkumar156/Natours-Exciting-tours-for-adventrous-peoples-"
          link2="https://natours-exciting-tours-for-adventrous-peoples.vercel.app/"
        />
        <PortfolioCard
          image="auraicons.png"
          heading="Aura Icons"
          para="Aura Icons is a collection of beautiful and customizable icons designed to enhance the visual appeal of your web projects."
          link="https://github.com/Shubham0850/aura-icons"
          link2="https://icons.auraui.com/"
        />
        <PortfolioCard
          image="tweak.png"
          heading="Tweak"
          para="Tweak is a simple and powerful Mac app that helps you customize, organize, and manage your workflow effortlessly with just a command."
          link="https://github.com/kunalkumar156/tweaktext"
          link2="https://tweak-frontend.vercel.app/"
        />
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;
