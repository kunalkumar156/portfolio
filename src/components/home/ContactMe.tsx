import React, { useState } from "react";
import { Container, Text, Box, Flex, Input, Textarea } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function Details({
  detailType,
  value,
  onChange,
  name,
}: {
  detailType: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  name?: string;
}) {
  return (
    <Box width={{ base: "100%", md: "25%" }}>
      <Text sx={boxStyles.text}>{detailType}</Text>
      <Input
        sx={boxStyles.boxDetail}
        value={value}
        onChange={onChange}
        name={name} // Added name attribute
      />
    </Box>
  );
}

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "message") {
      setCharacterCount(value.length);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/; // Indian phone number regex
    return re.test(phone);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate fields
    if (!validateEmail(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!validatePhone(formData.phoneNumber)) {
      toast.error("Invalid phone number");
      return;
    }

    // Send email
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            topic: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
        },
      );
  };

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
        <form onSubmit={handleSubmit}>
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            gap={{ base: 5, md: 10 }}
            mb="1.5rem"
          >
            <Details
              key="first detail"
              detailType="First Name"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
            />
            <Details
              key="second detail"
              detailType="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
            />
          </Flex>
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            gap={{ base: 5, md: 10 }}
            mb="1.5rem"
          >
            <Details
              key="third detail"
              detailType="Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <Details
              key="fourth detail"
              detailType="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />
          </Flex>
          <Box >
            <Flex justify="center" align="center" flexDirection="column">
              <Box width={{ base: "100%", md: "53.4%" }} mb="1.5rem">
                <Text sx={boxStyles.text}>Explain Your Topic Briefly</Text>
                <Input
                  sx={boxStyles.boxDetail}
                  value={formData.topic}
                  onChange={handleChange}
                  name="topic"
                />
              </Box>
              <Box width={{ base: "100%", md: "53.4%" }} mb="2rem">
                <Text sx={boxStyles.text}>Message</Text>
                <Textarea
                  value={formData.message}
                  onChange={handleChange}
                  sx={{
                    ...boxStyles.boxDetail,
                    height: { base: "80px", md: "100px" },
                    maxLength: "500",
                  }}
                  name="message"
                />
                <Text
                  mt={2}
                  fontSize="14px"
                  color={characterCount > 500 ? "red" : "inherit"}
                >
                  Character Count: {characterCount}/500
                </Text>
              </Box>
              <button type="submit" className="opposite-button">
                Submit
              </button>
            </Flex>
          </Box>
        </form>
      </Box>

      <ToastContainer />
    </Container>
  );
}

export default ContactMe;
