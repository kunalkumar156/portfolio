import { Container, Text, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { CiStar } from "react-icons/ci";

function StarRating({ rating }: { rating: number }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <CiStar key={i} color={i <= rating ? "#006B6A" : "#A0AEC0"} />,
      );
    }
    return stars;
  };

  return <Flex>{renderStars()}</Flex>;
}

function ReviewBox({
  review,
  userimg,
  username,
  workplace,
  rating,
}: {
  review: string;
  userimg: string;
  username: string;
  workplace: string;
  rating: number;
}) {
  return (
    <Box border="1.333px solid #006B6A" borderRadius="8px" padding="2rem">
      <StarRating rating={rating} />
      <Text color="#1C1E53" fontSize="16px" marginBottom={6} marginTop="10px">
        {review}
      </Text>

      <Box>
        <Flex alignItems="center" gap={3}>
          <Image height="60px" width="60px" src={userimg} alt="userimage" />
          <Box>
            <Text color="#282938" fontWeight="600" fontSize={"14"}>
              {username}
            </Text>
            <Text fontSize="14px" color="#1C1E53">
              {workplace}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function Testimonials() {
  return (
    <>
      <Box backgroundColor="#F5FCFF">
        <Container maxW={1200} mt="3rem" mb="3rem" padding="8rem 0rem">
          <Text fontWeight="600" color="#282938" pb="10px">
            Clients Feedback
          </Text>
          <Text color="#282938" fontSize="40px" fontWeight="700" pb="3rem">
            Customer testimonials
          </Text>

          <Flex alignItems="center" gap={8}>
            <ReviewBox
              key="user1"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
              userimg="user1.png"
              username="Jack Harlow"
              workplace="Fings"
              rating={5}
            />
            <ReviewBox
              key="user1"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
              userimg="user2.png"
              username="Dannie Rusell"
              workplace="Apples"
              rating={4}
            />
            <ReviewBox
              key="user1"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
              userimg="user3.png"
              username="Joseph"
              workplace="WorkX"
              rating={5}
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Testimonials;