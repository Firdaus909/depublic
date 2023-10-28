import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const BlogCard = ({ blog }) => {
  const { title, description, time, img } = blog;
  return (
    <Box px={5}>
      <Flex
        direction={"column"}
        bgColor={"white"}
        padding={"1rem"}
        borderRadius={"2xl"}>
        <Image src={img} borderRadius={"3xl"} />
        <Text mt={2} fontSize={"xs"} color={"primary.500"}>
          {time}
        </Text>
        <Heading mt={3} fontSize={"lg"} color={"primary.900"} fontWeight={700}>
          {title}
        </Heading>
        <Text fontSize={"sm"} fontWeight={300} color={"tertiary.300"}>
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

export default BlogCard;
