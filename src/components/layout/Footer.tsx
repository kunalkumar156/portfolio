import { Container, Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function Footer() {
  return (
    <>
      <Box background="#F5FCFF" mt="3rem" mb="4rem">
        <Container maxW="1200" p="3rem 0rem">
          <Flex justify="space-between" alignItems="center" py={4} wrap="wrap">
            <Image src="logo.svg" alt="logo" height={7} />
            <Flex gap={5}>
              <Link _hover={{ textDecoration: "none" }}>Home</Link>
              <Link _hover={{ textDecoration: "none" }}>Portfolio</Link>
              <Link _hover={{ textDecoration: "none" }}>About Me</Link>
              <Link _hover={{ textDecoration: "none" }}>Contact</Link>
              <Link _hover={{ textDecoration: "none" }}>Testimonials</Link>
              <Link _hover={{ textDecoration: "none" }}>Resume</Link>
            </Flex>

            <Flex justify="center" align="center" gap={4}>
              <FaGithub size={23} />
              <SiHashnode size={23} />
              <FaTwitter size={23} />
              <FaLinkedin size={23} />
            </Flex>
          </Flex>

          <hr
            style={{
              margin: "30px 0",
              marginBottom: "30px",
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(40, 41, 56, 0.25)",
            }}
          />

          <Flex alignItems="center" justify="space-between">
            <Text fontSize="13px">Crafted with ❤️ by Kishor Kunal</Text>

            <Flex align="center" gap={7}>
              <Link fontSize="13px" _hover={{ textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link fontSize="13px" _hover={{ textDecoration: "none" }}>
                Terms Of Services
              </Link>
              <Link fontSize="13px" _hover={{ textDecoration: "none" }}>
                Cookies Settings
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
