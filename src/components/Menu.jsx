import React, { useRef, useState } from "react";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ticket from "../assets/image/Ticket.png";
import Registration from "../assets/image/Registration.png";
import Booking from "../assets/image/Booking.png";
import Store from "../assets/image/Store.png";

const menus = [
  {
    img: Ticket,
    name: "Ticket",
  },
  {
    img: Registration,
    name: "Registration",
  },
  {
    img: Booking,
    name: "Booking",
  },
  {
    img: Store,
    name: "Store",
  },
  {
    img: Store,
    name: "Store",
  },
];

const Menu = () => {
  const [menuSlideCurrent, setMenuSlideCurrent] = useState(0);
  const menuSliderRef = useRef();

  const menuSliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Box
      borderRadius={10}
      position={"relative"}
      zIndex={10}
      bgColor={"white"}
      mx={"auto"}
      mt={"-50px"}
      padding={"1rem .5rem"}
      width={"80%"}
      boxShadow={"md"}>
      <Box width={"full"} overflow={"hidden"}>
        <Slider
          ref={(c) => (menuSliderRef.current = c)}
          {...menuSliderSettings}
          beforeChange={(current, next) => {
            setMenuSlideCurrent(next);
          }}>
          {menus.map((menu, i) => (
            <Box key={i}>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Image boxSize={"calc(30px + 2vw)"} src={menu.img} />
                <Text fontWeight={500} fontSize={"sm"}>
                  {menu.name}
                </Text>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
      <IconButton
        aria-label="Prev"
        isRound
        variant="solid"
        bgColor="white"
        color={"black"}
        position={"absolute"}
        top={"50%"}
        transform={"auto"}
        translateY={"-50%"}
        left={"-20px"}
        boxShadow={"md"}
        fontSize="20px"
        icon={<BsChevronLeft />}
        onClick={() => menuSliderRef.current.slickPrev()}
        isDisabled={menuSlideCurrent == 0}
        _disabled={{
          opacity: 1,
          bgColor: "neutral.200",
          cursor: "not-allowed",
          color: "rgba(0,0,0,0.6)",
          _hover: { bgColor: "neutral.200" },
        }}
      />
      <IconButton
        aria-label="Next"
        isRound
        variant="solid"
        bgColor="white"
        color={"black"}
        position={"absolute"}
        top={"50%"}
        transform={"auto"}
        translateY={"-50%"}
        right={"-20px"}
        boxShadow={"md"}
        fontSize="20px"
        icon={<BsChevronRight />}
        onClick={() => menuSliderRef.current.slickNext()}
        isDisabled={menuSlideCurrent == menus.length - 4}
        _disabled={{
          opacity: 1,
          bgColor: "neutral.200",
          cursor: "not-allowed",
          color: "rgba(0,0,0,0.6)",
          _hover: { bgColor: "neutral.200" },
        }}
      />
    </Box>
  );
};

export default Menu;
