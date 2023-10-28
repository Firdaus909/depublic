import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

const EventCard = ({ event }) => {
  const { title, description, img, location, price, person, status, time } =
    event;
  return (
    <Box px={3}>
      <Flex
        direction={"column"}
        bgColor={"white"}
        padding={"1rem"}
        borderRadius={"2xl"}>
        <Image src={img} borderRadius={"3xl"} />
        <Flex
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={1}
          mt={2}>
          <Flex alignItems={"center"}>
            <Icon fontSize={"sm"} as={MdLocationOn} />
            <Text fontSize={"xs"} fontWeight={500}>{location}</Text>
          </Flex>
          <Divider orientation="vertical" height={"20px"} mx={1} />
          <Text fontSize={"xs"} color={"primary.500"}>{time}</Text>
        </Flex>
        <Heading mt={3} fontSize={"lg"} color={"primary.900"} fontWeight={700}>
          {title}
        </Heading>
        <Text fontSize={"sm"} fontWeight={300} color={"tertiary.300"} mb={5}>
          {description}
        </Text>
        <Text fontSize={"lg"} fontWeight={800} color={"primary.500"}>
          IDR {price}
          <Text
            as={"span"}
            fontSize={"md"}
            fontWeight={500}
            color={"tertiary.500"}>
            / {person} {person == 1 ? "Person" : "People"}
          </Text>
        </Text>
        <Button
          mt={6}
          bgColor={"success.50"}
          color={"success.900"}
          _hover={{ bgColor: "success.200" }}
          borderRadius={"2xl"}>
          {status}
        </Button>
      </Flex>
    </Box>
  );
};

export default EventCard;
