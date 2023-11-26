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
            image="portfolio1.png"
            heading="Ahuse"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            link="Github"
            link2="View Project"
          />
          <PortfolioCard
            key="first project"
            image="portfolio2.png"
            heading="App Dashboard"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            link="Github"
            link2="View Project"
          />
          <PortfolioCard
            key="first project"
            image="portfolio3.png"
            heading="Easy Rent"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            link="Github"
            link2="View Project"
          />
        </Flex>
      </Container>
    </>
  );
}

export default Portfolio;
