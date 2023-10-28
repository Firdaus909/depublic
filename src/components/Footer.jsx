import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import FooterLogo from "../assets/image/Footer_logo.svg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Box bgColor={"primary.900"} pt={10} px={5}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"primary.100"}
        py={16} gap={5}>
        <Flex direction={"column"} gap={10} width={"50%"}>
          <Image width={"12rem"} src={FooterLogo} />
          <Text
            fontSize={"xs"}
            fontWeight={300}
            color={"primary.100"}
            sx={{ wordWrap: "break-word" }}>
            Tagline Company Here...
          </Text>
          <Flex gap={2}>
            <IconButton
              aria-label="social"
              isRound={true}
              variant="solid"
              bgColor={"primary.700"}
              size={"sm"}
              fontSize="15px"
              icon={<BsFacebook />}
            />
            <IconButton
              aria-label="social"
              isRound={true}
              variant="solid"
              bgColor={"primary.700"}
              size={"sm"}
              fontSize="15px"
              icon={<BsInstagram />}
            />
            <IconButton
              aria-label="social"
              isRound={true}
              variant="solid"
              bgColor={"primary.700"}
              size={"sm"}
              fontSize="15px"
              icon={<BsLinkedin />}
            />
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={4}>
          <Heading fontSize={"xs"} fontWeight={800} mb={2}>
            Lorem ipsum
          </Heading>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
        </Flex>
        <Flex direction={"column"} gap={4}>
          <Heading fontSize={"xs"} fontWeight={800} mb={2}>
            Lorem ipsum
          </Heading>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
          <Text fontSize={"xs"} fontWeight={300}>
            Lorem ipsum
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Text
        fontSize={"xs"}
        fontWeight={300}
        color={"neutral.100"}
        textAlign={"center"}
        py={10}>
        Copyright 2023 Depublic. All Rights Reserved
      </Text>
    </Box>
  );
};

export default Footer;
