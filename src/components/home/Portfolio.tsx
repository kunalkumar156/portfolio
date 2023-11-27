import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

function PortfolioCard({
  image,
  heading,
  para,
  link,
  link2,
}: {
  image: string;
  heading: string;
  para: string;
  link: string;
  link2: string;
}) {
  return (
    <Box borderRadius="8px" boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.15)">
      <Image borderRadius="8px" src={image} alt={heading} />
      <Box padding={5}>
        <Text fontSize="20px" fontWeight="700" mb="1" color="#282938">
          {heading}
        </Text>
        <Text color="#1C1E53" fontSize="14px" mb="4">
          {para}
        </Text>
        <Flex align="center" gap={8}>
          <button className="arrow-button">
            {link}
            <RxArrowTopRight color="#006B6A" />
          </button>

          <button className="arrow-button">
            {link2} <RxArrowTopRight color="#006B6A" />
          </button>
        </Flex>
      </Box>
    </Box>
  );
}

function Portfolio() {
  return (
    <>
      <Container maxW="1200" mt="3rem" mb="3rem">
        <Text fontWeight="600" color="#282938" pb="10px">
          Recent Projects
        </Text>
        <Text color="#282938" fontSize="40px" fontWeight="700" pb="3rem">
          My Portfolio
        </Text>

        <Flex gap={5}>
          <PortfolioCard
            key="first project"
            image="natours.png"
            heading="Natours"
            para="Natours is a nature tour packages website, providing a platform for users to explore and book various nature tours."
            link="Github"
            link2="View Project"
          />
          <PortfolioCard
            key="first project"
            image="asvaventures.png"
            heading="Asva Ventures"
            para="Asva Ventures is a web 3 related platform that explores the latest advancements in web technologies."
            link="Github"
            link2="View Project"
          />
          <PortfolioCard
            key="first project"
            image="newsmonkey.png"
            heading="News Monkey"
            para="News Monkey is a comprehensive news platform that delivers the latest and most relevant news to its users."
            link="Github"
            link2="View Project"
          />
        </Flex>
      </Container>
    </>
  );
}

export default Portfolio;
