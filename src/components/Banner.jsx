import React, { useState, useRef } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Event1 from "../assets/image/Event 1.jpg";
import Event2 from "../assets/image/Event 2.jpg";

const banners = [
  {
    img: Event1,
    url: "#",
  },
  {
    img: Event2,
    url: "#",
  },
  {
    img: Event1,
    url: "#",
  },
  {
    img: Event2,
    url: "#",
  },
  {
    img: Event1,
    url: "#",
  },
  {
    img: Event2,
    url: "#",
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const [mouseMoved, setMouseMoved] = useState(false);
  const [bannerSlideCurrent, setBannerSlideCurrent] = useState(0);
  const bannerSlideRef = useRef();

  const handleClick = () => {
    !mouseMoved && navigate("#detail");
  };

  const bannerSlideSettings = {
    className: "center",
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      position={"relative"}
      zIndex={9}
      bgColor={"white"}
      mx={"auto"}
      mt={"3rem"}
      mb={"2rem"}
      padding={"1rem .5rem"}
      width={"full"}>
      <Box width={"full"} overflow={"hidden"} mx={"auto"} mb={4}>
        <Slider
          ref={(c) => (bannerSlideRef.current = c)}
          {...bannerSlideSettings}
          beforeChange={(current, next) => setBannerSlideCurrent(next)}>
          {banners.map((banner, i) => (
            <Box
              as={Link}
              key={i}
              width={"80%"}
              padding={"1.3rem"}
              transition={"all .3s ease-in-out"}
              sx={{ ".slick-center &": { transform: "auto", scale: "1.2" } }}
              _focusVisible={{ outline: "none" }}
              onMouseMove={() => setMouseMoved(true)}
              onMouseDown={() => setMouseMoved(false)}
              onMouseUp={() => handleClick()}>
              <Image
                width={"full"}
                objectFit={"contain"}
                src={banner.img}
                borderRadius={"xl"}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
        {Array.from(Array(banners.length), (e, i) => (
          <Button
            key={i}
            border={"none"}
            borderRadius={"full"}
            bgColor={bannerSlideCurrent == i ? "primary.900" : "neutral.200"}
            minW={bannerSlideCurrent == i ? "3rem" : 0}
            paddingInline={0}
            height={"10px"}
            aspectRatio={"2/1"}
            transition={"all .3s ease-in-out"}
            _hover={{
              bgColor: bannerSlideCurrent == i ? "primary.900" : "primary.500",
            }}
            onClick={() => bannerSlideRef.current.slickGoTo(i, false)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Banner;
