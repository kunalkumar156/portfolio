import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import React from "react";

const styles = {
  deskLink: {
    _hover: {
      color: "#5E3BEE",
      textDecoration: "none",
    },
  },

  mobLink: {
    fontSize: "22px",
    fontWeight: "500",
    textAlign: "center",
    _hover: {
      color: "#5E3BEE",
      textDecoration: "none",
    },
  },

  mobRow: {
    margin: "20px auto",
    marginBottom: "25px",
    width: "80%",
    height: "2px",
    borderRadius: "10px",
    backgroundColor: "rgba(94, 59, 238, 0.45)",
  },
};

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Link href="#">
            <Image
              src="logo.svg"
              alt="logo"
              height={{ base: "30px", md: "50px" }}
            />
          </Link>

          {/* Hamburger icon for mobile */}
          <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
            <RxHamburgerMenu size={20} color="#5E3BEE" />
          </Box>

          {/* Navbar links for larger screens */}
          <Flex
            align="center"
            display={{ base: "none", md: "flex" }}
            gap={{ base: "20px", md: "30px" }}
          >
            {/* Your navigation links */}
            <ChakraLink href="/" sx={styles.deskLink}>
              Home
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              Expertise
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              About Me
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              Blogs
            </ChakraLink>
            <ChakraLink href="#" sx={styles.deskLink}>
              Resume
            </ChakraLink>
          </Flex>

          {/* Drawer for mobile */}
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Link
                  href="#"
                  height="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginTop="1rem"
                >
                  <Image src="logo.svg" alt="logo" height="40px" />
                </Link>
              </DrawerHeader>
              <DrawerBody>
                {/* Your navigation links */}
                <Flex flexDirection="column">
                  <ChakraLink href="#" sx={styles.mobLink}>
                    Home
                  </ChakraLink>
                  <hr style={styles.mobRow} />
                  <ChakraLink href="#" sx={styles.mobLink}>
                    Expertise
                  </ChakraLink>
                  <hr style={styles.mobRow} />
                  <ChakraLink href="#" sx={styles.mobLink}>
                    About Me
                  </ChakraLink>
                  <hr style={styles.mobRow} />
                  <ChakraLink href="#" sx={styles.mobLink}>
                    Blogs
                  </ChakraLink>
                  <hr style={styles.mobRow} />
                  <ChakraLink href="#" sx={styles.mobLink}>
                    Resume
                  </ChakraLink>
                  <hr style={styles.mobRow} />
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          {/* Contact Button */}
          <Box display={{ base: "none", md: "block" }}>
            <button className="btn-outline">Contact Me</button>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default Nav;
