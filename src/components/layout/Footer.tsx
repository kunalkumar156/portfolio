import {
  Container,
  Box,
  Flex,
  Image,
  Link,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const styles = {
  deskLink: {
    _hover: {
      color: "#5E3BEE",
      textDecoration: "none",
    },
  },
};

function Footer() {
  return (
    <Box background="#F5FCFF" mt="3rem" id="footer">
      <Container maxW="1200" p={{ base: "1rem", md: "3rem 0rem" }}>
        <Flex
          justify="space-between"
          alignItems="center"
          py={4}
          wrap="wrap"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Image
            src="logo.svg"
            alt="logo"
            height={{ base: "8", md: "10" }}
            mb={{ base: "1rem" }}
          />

          <Flex
            gap={{ base: "1", md: "5" }}
            mt={{ base: "2", md: "0" }}
            flexDirection={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
          >
            <ChakraLink href="#" sx={styles.deskLink}>
              Home
            </ChakraLink>
            <ChakraLink href="#portfolio" sx={styles.deskLink}>
              Portfolio
            </ChakraLink>
            <ChakraLink href="#aboutme" sx={styles.deskLink}>
              About Me
            </ChakraLink>
            <ChakraLink href="#contactme" sx={styles.deskLink}>
              Contact
            </ChakraLink>
            <ChakraLink href="#blogs" sx={styles.deskLink}>
              Blogs
            </ChakraLink>
            <ChakraLink
              href="/resume.pdf"
              download="kishor-kunal-resume.pdf"
              sx={styles.deskLink}
            >
              Resume
            </ChakraLink>
          </Flex>

          <Flex
            justify={{ base: "center", md: "flex-end" }}
            align="center"
            gap={4}
            mt={{ base: "2", md: "0" }}
          >
            <a href="https://github.com/kunalkumar156">
              <FaGithub size={23} />
            </a>
            <a href="https://devsavant.hashnode.dev/">
              <SiHashnode size={23} />
            </a>
            <a href="https://twitter.com/btwitskishor">
              <FaTwitter size={23} />
            </a>
            <a href="https://www.linkedin.com/in/kishor-kunal-8a5656196/">
              <FaLinkedin size={23} />
            </a>
          </Flex>
        </Flex>

        <hr
          style={{
            margin: "20px 0",
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(40, 41, 56, 0.25)",
          }}
        />

        <Flex
          alignItems="center"
          justify="center"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Text
            fontSize={{ base: "10px", md: "13px" }}
            mb={{ base: "2", md: "0" }}
          >
            Crafted with ❤️ by Kishor Kunal
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
