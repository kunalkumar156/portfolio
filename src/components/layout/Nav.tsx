import { Box, Container, Flex, Image, Link, Button } from "@chakra-ui/react";
import React from "react";

function Nav() {
  return (
    <>
      <Container maxW={1300}>
        <Flex
          as={"nav"}
          justify="space-between"
          alignItems="center"
          py={4}
          wrap="wrap"
          bg="transparent"
          color="#1C1E53"
        >
          {/* Logo */}
          <Link href="#" height="40px">
            <Image src="logo.svg" alt="logo" height="50px" />
          </Link>

          {/* Other links */}
          <Flex align="center" justify="center" gap={20}>
            <Link
              href="#"
              _hover={{
                color: "#5E3BEE",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              _hover={{
                color: "#5E3BEE",
                textDecoration: "none",
              }}
            >
              Expertise
            </Link>
            <Link
              href="#"
              _hover={{
                color: "#5E3BEE",
                textDecoration: "none",
              }}
            >
              About Me
            </Link>
            <Link
              href="#"
              _hover={{
                color: "#5E3BEE",
                textDecoration: "none",
              }}
            >
              Testimonials
            </Link>
            <Link
              href="#"
              _hover={{
                color: "#5E3BEE",
                textDecoration: "none",
              }}
            >
              Resume
            </Link>
          </Flex>

          {/* Contact Button */}
          <button className="btn-outline">Contact Me</button>
        </Flex>
      </Container>
    </>
  );
}

export default Nav;
