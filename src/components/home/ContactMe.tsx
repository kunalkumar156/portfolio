import { Container, Text, Box, Flex, Input, Checkbox } from "@chakra-ui/react";
import React from "react";

const boxStyles = {
  boxDetail: {
    fontSize: { base: "12px", md: "14px" },
    color: "#282938",
    padding: "10px",
    border: "1px solid #5E3BEE",
    borderRadius: "8px",
    transition: "border-color 0.3s ease",
    _hover: {
      borderColor: "#5E3BEE",
    },
  },
  text: {
    fontSize: { base: "12px", md: "14px" },
    color: "#282938",
    marginBottom: "5px",
  },
};

function Details({ detailType }: { detailType: string }) {
  return (
    <Box width={{ base: "100%", md: "25%" }}>
      <Text sx={boxStyles.text}>{detailType}</Text>
      <Input sx={boxStyles.boxDetail} />
    </Box>
  );
}

function ContactMe() {
  return (
    <Container maxW="1200" padding="3rem 0" id="contactme">
      <Flex alignItems="center" justifyContent="center" direction="column">
        <Text fontWeight="600" color="#282938" pb="10px">
          Get In Touch
        </Text>
        <Text
          color="#282938"
          fontSize={{ base: "32px", md: "40px" }}
          fontWeight="700"
          pb="20px"
        >
          Contact Me
        </Text>
        <Text textAlign="center" width={{ base: "90%", md: "50%" }}>
          If you have any questions, project inquiries, or just want to say
          hello, feel free to reach out. I&apos;m here to help and excited to
          connect with you!
        </Text>
      </Flex>

      <Box marginTop={10} margin={{ base: "30px", md: "0" }}>
        <Flex
          justifyContent="center"
          flexWrap="wrap"
          gap={{ base: 5, md: 10 }}
          mb="1.5rem"
        >
          <Details key="first detail" detailType="First Name" />
          <Details key="second detail" detailType="Last Name" />
        </Flex>
        <Flex
          justifyContent="center"
          flexWrap="wrap"
          gap={{ base: 5, md: 10 }}
          mb="1.5rem"
        >
          <Details key="third detail" detailType="Email" />
          <Details key="fourth detail" detailType="Phone Number" />
        </Flex>
      </Box>

      <Box margin={{ base: "30px", md: "0" }}>
        <Flex justify="center" align="center" flexDirection="column">
          <Box width={{ base: "100%", md: "53.4%" }} mb="1.5rem">
            <Text sx={{ ...boxStyles.text }}>Choose A Topic</Text>
            <Input sx={boxStyles.boxDetail} />
          </Box>
          <Box width={{ base: "100%", md: "53.4%" }} mb="1.5rem">
            <Text sx={boxStyles.text}>Message</Text>
            <Input sx={boxStyles.boxDetail} />
          </Box>
          <Checkbox
            textAlign="left"
            isChecked={false}
            // onClick={{ isChecked: "true" }}
            mb="1.5rem"
          >
            I accept the terms
          </Checkbox>

          <button className="opposite-button">Submit</button>
        </Flex>
      </Box>
    </Container>
  );
}

export default ContactMe;
