import { Container, Text, Box, Flex, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

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
  const [message, setMessage] = useState("");
  // const [submitStatus, setSubmitStatus] = useState("unsubmitted");b

  const handleChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 500) {
      setMessage(inputValue);
    }
  };

  // const handleSubmission = async () => {
  //   try {
  //     await sendEmail({
  //       to: "yoyokunal156@gmail.com",
  //       subject: "Contact Form Submission",
  //       body: `First Name: ${firstNameValue}\nLast Name: ${lastNameValue}\nEmail: ${emailValue}\nPhone Number: ${phoneValue}\nTopic: ${topicValue}\nMessage: ${message}`,
  //     });

  //     setSubmitStatus("success");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     setSubmitStatus("error");
  //   }
  // };

  const characterCount = message.length;

  return (
    <Container maxW="1200" padding="2rem 0" id="contactme">
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
        <Text textAlign="center" width={{ base: "90%", md: "50%" }} mb="10">
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
            <Text sx={{ ...boxStyles.text }}>Explain Your Topic Berifly</Text>
            <Input sx={boxStyles.boxDetail} />
          </Box>
          <Box width={{ base: "100%", md: "53.4%" }} mb="2rem">
            <Text sx={boxStyles.text}>Message</Text>
            <Textarea
              value={message}
              onChange={handleChange}
              sx={{
                ...boxStyles.boxDetail,
                height: { base: "80px", md: "100px" },
                maxLength: "500",
              }}
            />
            <Text
              mt={2}
              fontSize="14px"
              color={characterCount > 500 ? "red" : "inherit"}
            >
              Character Count: {characterCount}/500
            </Text>
          </Box>
          <button className="opposite-button">Submit</button>
        </Flex>
      </Box>
    </Container>
  );
}

export default ContactMe;
