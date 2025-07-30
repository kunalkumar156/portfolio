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
      {/* Fix image height for consistency */}
      <Box h="220px" overflow="hidden">
        <Image
          src={image}
          alt={heading}
          w="100%"
          h="100%"
          objectFit="cover"
          borderTopRadius="16px"
        />
      </Box>

      <Box p={5}>
        <Text fontSize="20px" fontWeight="700" mb={2} color="#282938">
          {heading}
        </Text>
        <Text color="#1C1E53" fontSize="14px" mb={4} noOfLines={3}>
          {para}
        </Text>

        {/* Chip style links */}
        <Flex gap={3} wrap="wrap">
          <Flex
            as="a"
            href={!isProjectDisabled ? link2 : undefined}
            target="_blank"
            rel="noopener noreferrer"
            align="center"
            gap={2}
            px={3}
            py={1.5}
            fontSize="13px"
            fontWeight="500"
            borderRadius="20px"
            bg={isProjectDisabled ? "gray.200" : "teal.50"}
            color={isProjectDisabled ? "gray.500" : "teal.700"}
            cursor={isProjectDisabled ? "not-allowed" : "pointer"}
            _hover={!isProjectDisabled ? { bg: "teal.100" } : {}}
            transition="all 0.2s ease"
          >
            {isProjectDisabled ? "On Development" : "View Project"}
            <RxArrowTopRight />
          </Flex>

          <Flex
            as="a"
            href={!isGitHubDisabled ? link : undefined}
            target="_blank"
            rel="noopener noreferrer"
            align="center"
            gap={2}
            px={3}
            py={1.5}
            fontSize="13px"
            fontWeight="500"
            borderRadius="20px"
            bg={isGitHubDisabled ? "gray.200" : "teal.50"}
            color={isGitHubDisabled ? "gray.500" : "teal.700"}
            cursor={isGitHubDisabled ? "not-allowed" : "pointer"}
            _hover={!isGitHubDisabled ? { bg: "teal.100" } : {}}
            transition="all 0.2s ease"
          >
            {isGitHubDisabled ? "Private Repo" : "GitHub"}
            <RxArrowTopRight />
          </Flex>
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
