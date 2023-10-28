import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { PiEyeClosed } from "react-icons/pi";

import Bg from "../assets/image/Bg_bird.svg";
import Apple from "../assets/image/Apple.svg";
import Facebook from "../assets/image/Facebook.svg";
import Google from "../assets/image/Google.svg";

const SignUp = () => {
  return (
    <Box position={"relative"} overflowX={"hidden"} pb={10}>
      <Box
        position={"absolute"}
        zIndex={-99}
        right={"-30px"}
        top={"30px"}
        width={"180px"}
        height={"180px"}
        backgroundImage={Bg}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        backgroundPosition={"right"}
      />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"surface.900"}
        padding={".5rem 1rem"}>
        <Text fontWeight={700}>Sign Up</Text>
        <IconButton
          as={RouterLink}
          to={"/"}
          variant="ghost"
          colorScheme="surface"
          aria-label="Close"
          fontSize="20px"
          icon={<MdClose />}
        />
      </Flex>
      <Flex direction={"column"} padding={"2rem"} gap={10}>
        <Text fontWeight={500}>Register for the better experience</Text>
        <form>
          <FormControl mb={4}>
            <Input
              placeholder="Username"
              border={"none"}
              borderBottom={"1px solid"}
              borderColor={"neutral.200"}
              borderRadius={0}
              _focus={{ boxShadow: "none" }}
            />
            <FormErrorMessage>Username must not be empty</FormErrorMessage>
          </FormControl>
          <FormControl mb={4}>
            <Input
              placeholder="Phone Number"
              border={"none"}
              borderBottom={"1px solid"}
              borderColor={"neutral.200"}
              borderRadius={0}
              _focus={{ boxShadow: "none" }}
            />
            <FormErrorMessage>Phone number must not be empty</FormErrorMessage>
          </FormControl>
          <FormControl mb={8}>
            <InputGroup>
              <Input
                type="password"
                placeholder="Password"
                border={"none"}
                borderBottom={"1px solid"}
                borderColor={"neutral.200"}
                borderRadius={0}
                _focus={{ boxShadow: "none" }}
              />
              <InputRightElement>
                <PiEyeClosed />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>Password must not be empty</FormErrorMessage>
          </FormControl>
          <Button width={"full"}>Create Account</Button>
        </form>
        <Text textAlign={"center"} color={"neutral.300"}>
          Have an Account?{" "}
          <Link
            as={RouterLink}
            to={"/signin"}
            color={"primary.500"}
            fontWeight={700}>
            Login
          </Link>
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={10}
        gap={5}>
        <Text>atau daftar dengan</Text>
        <Flex alignItems={"center"} justifyContent={"center"} gap={8}>
          <IconButton
            variant="ghost"
            colorScheme="red"
            aria-label="Apple Login"
            width={20}
            height={20}
            boxShadow={"0px 2px 5px rgba(0,0,0,0.2)"}
            icon={<Image src={Apple} objectFit={"contain"} boxSize={"50%"} />}
          />
          <IconButton
            variant="ghost"
            colorScheme="teal"
            aria-label="Google Login"
            fontSize="20px"
            width={20}
            height={20}
            boxShadow={"0px 2px 5px rgba(0,0,0,0.2)"}
            icon={<Image src={Google} objectFit={"contain"} boxSize={"50%"} />}
          />
          <IconButton
            variant="ghost"
            colorScheme="green"
            aria-label="Facebook Login"
            fontSize="20px"
            width={20}
            height={20}
            boxShadow={"0px 2px 5px rgba(0,0,0,0.2)"}
            icon={
              <Image src={Facebook} objectFit={"contain"} boxSize={"50%"} />
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUp;
