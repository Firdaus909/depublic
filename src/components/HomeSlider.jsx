import React, { useState, useRef } from "react";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./EventCard";
import BlogCard from "./BlogCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeSlider = ({ type, data }) => {
  const [slideCurrent, setSlideCurrent] = useState(0);
  const slideRef = useRef();

  const slideSettings = {
    className: "center",
    dots: false,
    infinite: false,
    centerMode: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} px={"1rem"}>
        <Heading fontSize={"xl"}>
          {type == "event" ? "Upcoming Event" : "Popular Blog"}
        </Heading>
        <Flex alignItems={"center"} gap={2}>
          <IconButton
            aria-label="Prev"
            isRound
            variant="solid"
            bgColor="white"
            color={"black"}
            boxShadow={"md"}
            size={"sm"}
            fontSize="15px"
            icon={<BsChevronLeft />}
            isDisabled={slideCurrent == 0}
            onClick={() => slideRef.current.slickPrev()}
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
            boxShadow={"md"}
            size={"sm"}
            fontSize="15px"
            icon={<BsChevronRight />}
            isDisabled={slideCurrent == data.length - 1}
            onClick={() => slideRef.current.slickNext()}
            _disabled={{
              opacity: 1,
              bgColor: "neutral.200",
              cursor: "not-allowed",
              color: "rgba(0,0,0,0.6)",
              _hover: { bgColor: "neutral.200" },
            }}
          />
          <Text as={Link} to={"#"} fontSize={"sm"} fontWeight={500}>
            See All
          </Text>
        </Flex>
      </Flex>
      <Box
        width={"full"}
        position={"relative"}
        zIndex={9}
        mx={"auto"}
        mt={"1rem"}
        py={".5rem"}>
        <Box
          width={"full"}
          overflow={"hidden"}
          sx={{
            ".slick-list": {
              padding:
                slideCurrent == data.length - 1
                  ? "0 20% !important"
                  : "0 !important",
              transition: "all .3s ease-in-out",
            },
          }}>
          <Slider
            ref={(c) => (slideRef.current = c)}
            {...slideSettings}
            beforeChange={(current, next) => {
              setSlideCurrent(next);
            }}>
            {data.map((d, i) => (
              <Box key={i}>
                {type == "event" ? (
                  <EventCard event={d} />
                ) : (
                  <BlogCard blog={d} />
                )}
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default HomeSlider;
