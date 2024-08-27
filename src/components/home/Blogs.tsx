import {
  Container,
  Text,
  Box,
  Flex,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";

const styles = {
  deskLink: {
    _hover: {
      textDecoration: "none",
    },
  },
};

function BlogBox({
  blogTitle,
  blogLink,
  blogImage,
  blogDescription,
}: {
  blogTitle: string;
  blogLink: string;
  blogImage: string;
  blogDescription: string;
}) {
  return (
    <Box
      borderRadius="8px"
      boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.15)"
      mb={{ base: "2rem", md: "0" }}
    >
      <Box>
        <Flex
          alignItems={{ base: "flex-start", md: "center" }}
          flexDirection="column"
          gap={{ base: 3, md: 8 }}
        >
          <ChakraLink href={blogLink} target="_blank" rel="noopener noreferrer">
            <Image
              borderTopRadius="8px"
              src={blogImage}
              alt="blog image"
              mb={{ base: "2", md: "-6" }}
            />
          </ChakraLink>
          <Box padding="1rem" textAlign="center">
            <ChakraLink
              className="arrow-button"
              href={blogLink}
              target="_blank"
              rel="noopener noreferrer"
              color="#282938"
              fontWeight="600"
              fontSize={{ base: "18px", md: "20px" }}
              sx={styles.deskLink}
              mb="2"
            >
              {blogTitle}
            </ChakraLink>
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              color="#1C1E53"
              mb="2"
            >
              {blogDescription}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function Blogs() {
  return (
    <Box backgroundColor="#F5FCFF" id="blogs">
      <Container
        maxW={{ base: "100%", md: 1200 }}
        mt="3rem"
        mb="3rem"
        padding={{ base: "2rem", md: "8rem 0rem" }}
      >
        <Text fontWeight="600" color="#282938" pb={{ base: "6", md: "10px" }}>
          Blogs
        </Text>
        <Text
          color="#282938"
          fontSize={{ base: "32px", md: "40px" }}
          fontWeight="700"
          pb={{ base: "2rem", md: "3rem" }}
        >
          Explore My Recent Blogs
        </Text>

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ base: "2", md: "8" }}
          className="mb-8"
        >
          <BlogBox
            key="blog1"
            blogTitle="AURA UI - A COMPONENT LIBRARY"
            blogLink="https://devsavant.hashnode.dev/auraui-component-library-crafting-seamless-frontend-experiences"
            blogImage="auraui.avif"
            blogDescription="Design elegant React sites fast with Aura UI’s advanced component library."
          />
          <BlogBox
            key="blog2"
            blogTitle="BACKEND DEVLOPMENT BASICS"
            blogLink="https://devsavant.hashnode.dev/backend-development-basics-an-overview"
            blogImage="backend.avif"
            blogDescription="Unlock the basics of backend development and start building powerful applications from the ground up."
          />
          <BlogBox
            key="blog3"
            blogTitle="DSA SHORT NOTES"
            blogLink="https://devsavant.hashnode.dev/data-structures-and-algorithms-simplified-your-quick-guide-to-key-concepts"
            blogImage="dsa.avif"
            blogDescription="Data Structures And Algorithms Simplified: Your Quick Guide to Key Concepts"
          />
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ base: "2", md: "8" }}
        >
          <BlogBox
            key="blog1"
            blogTitle="THE BLOCKCHAIN"
            blogLink="https://devsavant.hashnode.dev/the-blockchain"
            blogImage="blog1.avif"
            blogDescription="Demystifying Blockchain: A Concise Introduction And Easy-to-Understand Guide"
          />
          <BlogBox
            key="blog2"
            blogTitle="HISTORY OF WEB DEVELOPMENT"
            blogLink="https://devsavant.hashnode.dev/history-of-web-development"
            blogImage="blog2.avif"
            blogDescription="Web Development Evolution: Tracing the Historical Milestones"
          />
          <BlogBox
            key="blog3"
            blogTitle="BIG O NOTATION"
            blogLink="https://devsavant.hashnode.dev/simplified-guide-to-big-o-notation-making-algorithms-easier-to-understand"
            blogImage="blog3.avif"
            blogDescription="Simplified Guide to Big O Notation: Making Algorithms Easier to Understand"
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default Blogs;
