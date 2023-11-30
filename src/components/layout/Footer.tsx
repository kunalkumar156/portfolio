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
    <Box background="#F5FCFF" mt="3rem" mb="4rem" id="footer">
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
            <ChakraLink href="#" sx={styles.deskLink}>
              About Me
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              Contact
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              Testimonials
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              Resume
            </ChakraLink>
          </Flex>

          <Flex
            justify={{ base: "center", md: "flex-end" }}
            align="center"
            gap={4}
            mt={{ base: "2", md: "0" }}
          >
            <FaGithub size={23} />
            <SiHashnode size={23} />
            <FaTwitter size={23} />
            <FaLinkedin size={23} />
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
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Text
            fontSize={{ base: "10px", md: "13px" }}
            mb={{ base: "2", md: "0" }}
          >
            Crafted with ❤️ by Kishor Kunal
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={2}
            ml={{ md: "auto" }}
            alignItems={{ base: "center" }}
            justify={{ base: "center" }}
            display={{ base: "none", md: "flex" }}
          >
            <Link
              fontSize={{ base: "10px", md: "13px" }}
              _hover={{ textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              fontSize={{ base: "10px", md: "13px" }}
              _hover={{ textDecoration: "none" }}
            >
              Terms Of Services
            </Link>
            <Link
              fontSize={{ base: "10px", md: "13px" }}
              _hover={{ textDecoration: "none" }}
            >
              Cookies Settings
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
