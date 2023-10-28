import React, { useEffect } from "react";
import { Button, ButtonGroup, Flex, IconButton, Image } from "@chakra-ui/react";

import Logo from "../assets/image/Logo.svg";
import { Link } from "react-router-dom";
import { BsEnvelope, BsPersonCircle } from "react-icons/bs";

const Navbar = ({ pathname }) => {
  const isLogin = false;

  return (
    <Flex
      padding={"1rem"}
      alignItems={"center"}
      bgColor={"white"}
      justifyContent={"space-between"}
      position={"relative"}
      zIndex={99}
      boxShadow={"0 4px 10px -10px rgba(0,0,0,0.5)"}>
      <Image boxSize={"50px"} src={Logo} />
      {pathname === "/signin" || pathname === "/signup" ? (
        <></>
      ) : isLogin ? (
        <ButtonGroup colorScheme="primary">
          <IconButton
            aria-label="Mail"
            isRound
            variant="solid"
            fontSize="20px"
            icon={<BsEnvelope />}
          />
          <IconButton
            aria-label="User"
            isRound
            variant="solid"
            fontSize="20px"
            icon={<BsPersonCircle />}
          />
        </ButtonGroup>
      ) : (
        <ButtonGroup colorScheme="primary">
          <Button as={Link} to={"signin"} variant="outline">
            Sign In
          </Button>
          <Button as={Link} to={"signup"} variant="solid">
            Sign Up
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
};

export default Navbar;
