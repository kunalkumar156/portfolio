import { Container, Text, Box, Flex, Input, Checkbox } from "@chakra-ui/react";
import React from "react";

const boxStyles = {
  boxDetail: {
    fontSize: "14px",
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
    fontSize: "14px",
    color: "#282938",
    marginBottom: "5px",
  },
};

function Details({ detailType }: { detailType: string }) {
  return (
    <Box width="25%">
      <Text style={boxStyles.text}>{detailType}</Text>
      <Input style={boxStyles.boxDetail} />
    </Box>
  );
}

function ContactMe() {
  return (
    <>
      <Container maxW="1200" padding="3rem 0">
        <Flex alignItems="center" justifyContent="center" direction="column">
          <Text fontWeight="600" color="#282938" pb="10px">
            Get In Touch
          </Text>
          <Text color="#282938" fontSize="40px" fontWeight="700" pb="20px">
            Contact Me
          </Text>
          <Text>
            If you have any questions, project inquiries, or just want to say
            hello, feel free to reach out. I&apos;m here to help and excited to
            connect with you!
          </Text>
        </Flex>

        <Box marginTop={10}>
          <Flex justifyContent="center" gap={10} mb="1.5rem">
            <Details key="first detail" detailType="First Name" />
            <Details key="second detail" detailType="Last Name" />
          </Flex>

          <Flex justifyContent="center" gap={10} mb="1.5rem">
            <Details key="third detail" detailType="Email" />
            <Details key="fourth detail" detailType="Phone Number" />
          </Flex>
        </Box>

        <Box>
          <Flex justify="center" align="center" flexDirection="column">
            <Box width="53.4%" mb="1.5rem">
              <Text style={boxStyles.text}>Choose A Topic</Text>
              <Input style={boxStyles.boxDetail} />
            </Box>
            <Box width="53.4%" mb="1.5rem">
              <Text style={boxStyles.text}>Message</Text>
              <Input style={boxStyles.boxDetail} />
            </Box>
            <Checkbox textAlign="left" isChecked={false} mb="1.5rem">
              I accept the terms
            </Checkbox>

            <button className="opposite-button">Submit</button>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default ContactMe;
