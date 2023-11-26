import { Container, Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Box background="#F5FCFF" mt="3rem" mb="4rem">
        <Container maxW="1200" p="3rem 0rem">
          <Flex justify="space-between" alignItems="center" py={4} wrap="wrap">
            <Image src="logo.svg" alt="logo" />
            <Box>
              <Link _hover={{ textDecoration: "none" }}>Home</Link>
              <Link _hover={{ textDecoration: "none" }}>Portfolio</Link>
              <Link _hover={{ textDecoration: "none" }}>About Me</Link>
              <Link _hover={{ textDecoration: "none" }}>Contact</Link>
              <Link _hover={{ textDecoration: "none" }}>Testimonials</Link>
              <Link _hover={{ textDecoration: "none" }}>Portfolio</Link>
            </Box>

            <Box>
              <Flex justify="center" align="center">
                <FaInstagram size={30} />
                <FaFacebook size={30} />
                <FaTwitter size={30} />
                <FaLinkedin size={30} />
              </Flex>
            </Box>
          </Flex>

          <Box height="2px" color="grey">
            {" "}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
