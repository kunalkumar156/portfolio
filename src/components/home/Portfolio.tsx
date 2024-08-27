import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

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
    <Box
      borderRadius="8px"
      boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.15)"
      mb="3"
    >
      <Image borderTopRadius="8px" src={image} alt={heading} />
      <Box padding={{ base: 4, md: 5 }}>
        <Text
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight="700"
          mb="1"
          color="#282938"
        >
          {heading}
        </Text>
        <Text color="#1C1E53" fontSize={{ base: "12px", md: "14px" }} mb="4">
          {para}
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={{ base: 4, md: 8 }}
        >
          <button className="arrow-button" disabled={isProjectDisabled}>
            {isProjectDisabled ? (
              "On Development"
            ) : (
              <a href={link2} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}

            <RxArrowTopRight color="#006B6A" />
          </button>
          <button className="arrow-button" disabled={isGitHubDisabled}>
            {isGitHubDisabled ? (
              "Private Repo"
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            <RxArrowTopRight color="#006B6A" />
          </button>
        </Flex>
      </Box>
    </Box>
  );
}

function Portfolio() {
  return (
    <Container maxW="1200" mt="3rem" mb="3rem" id="portfolio">
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

      <Flex direction={{ base: "column", md: "row" }} gap={{ base: 5, md: 8 }}>
        <PortfolioCard
          key="first project"
          image="auraui.png"
          heading="AuraUI"
          para="AuraUI is a high-performance component library for building stunning and responsive React websites with ease."
          link="https://github.com/Shubham0850/auraui"
          link2="https://www.auraui.com/"
          isGitHubDisabled={false}
          isProjectDisabled={false}
        />

        <PortfolioCard
          key="first project"
          image="asvaventures.png"
          heading="Asva Ventures"
          para="Asva Ventures is a web 3 related platform that explores the latest advancements in web technologies. It is a freelance project done by me."
          link=""
          link2="https://asvaventures.com/"
          isGitHubDisabled={true}
          isProjectDisabled={false}
        />
        <PortfolioCard
          key="second project"
          image="natours.png"
          heading="Natours"
          para="Natours is a nature tour packages website, providing a platform for users to explore and book various nature tours."
          link="https://github.com/kunalkumar156/Natours-Exciting-tours-for-adventrous-peoples-"
          link2="https://natours-exciting-tours-for-adventrous-peoples.vercel.app/"
          isGitHubDisabled={false}
          isProjectDisabled={false}
        />
      </Flex>
    </Container>
  );
}

export default Portfolio;
