import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Bg from "../assets/image/Bg_bird.svg";

import Menu from "../components/Menu";
import Banner from "../components/Banner";
import HomeSlider from "../components/HomeSlider";

import EventImg from "../assets/image/Event 1.jpg";
import BlogImg from "../assets/image/Blog.jpg";

const Events = [
  {
    title: "Judul Event",
    location: "Bandung",
    time: "Day, Mon Tanggal",
    description: "Lorem ipsum dolor sit amet.",
    price: "1.999.000",
    person: "1",
    status: "Tersedia",
    img: EventImg,
  },
  {
    title: "Judul Event",
    location: "Bandung",
    time: "Day, Mon Tanggal",
    description: "Lorem ipsum dolor sit amet.",
    price: "1.999.000",
    person: "1",
    status: "Tersedia",
    img: EventImg,
  },
  {
    title: "Judul Event",
    location: "Bandung",
    time: "Day, Mon Tanggal",
    description: "Lorem ipsum dolor sit amet.",
    price: "1.999.000",
    person: "1",
    status: "Tersedia",
    img: EventImg,
  },
  {
    title: "Judul Event",
    location: "Bandung",
    time: "Day, Mon Tanggal",
    description: "Lorem ipsum dolor sit amet.",
    price: "1.999.000",
    person: "1",
    status: "Tersedia",
    img: EventImg,
  },
  {
    title: "Judul Event",
    location: "Bandung",
    time: "Day, Mon Tanggal",
    description: "Lorem ipsum dolor sit amet.",
    price: "1.999.000",
    person: "1",
    status: "Tersedia",
    img: EventImg,
  },
];

const Blogs = [
  {
    title: "Judul Blog",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae, aspernatur sit quidem vitae cum?",
    time: "Day, Mon Tanggal",
    img: BlogImg,
  },
  {
    title: "Judul Blog",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae, aspernatur sit quidem vitae cum?",
    time: "Day, Mon Tanggal",
    img: BlogImg,
  },
  {
    title: "Judul Blog",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae, aspernatur sit quidem vitae cum?",
    time: "Day, Mon Tanggal",
    img: BlogImg,
  },
  {
    title: "Judul Blog",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae, aspernatur sit quidem vitae cum?",
    time: "Day, Mon Tanggal",
    img: BlogImg,
  },
];

const Home = () => {
  return (
    <Box bgColor={"neutral.100"}>
      <Box>
        <Flex
          bgColor={"surface.900"}
          direction={"column"}
          padding={"2rem 1rem"}
          minH={"50vh"}
          position={"relative"}
          zIndex={9}
          overflowX={"hidden"}
          gap={16}
          pb={"20vh"}>
          <Box
            backgroundImage={Bg}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
            backgroundPosition={"right"}
            position={"absolute"}
            top={0}
            right={"calc(-150px + 2vw)"}
            zIndex={-1}
            width={"100%"}
            height={"100%"}
          />
          <InputGroup>
            <InputLeftElement>
              <BsSearch />
            </InputLeftElement>
            <Input placeholder="Search Activities" />
          </InputGroup>
          <Flex width={"100%"} direction={"column"} gap={8}>
            <Heading width={"60%"}>Tagline Hero Section</Heading>
            <Button
              colorScheme="primary"
              variant={"solid"}
              width={"fit-content"}>
              Download Aplikasi
            </Button>
          </Flex>
        </Flex>
        <Menu />
      </Box>

      <Banner />

      <Box py={10}>
        <HomeSlider type={"event"} data={Events} />
      </Box>
      <Box py={10}>
        <HomeSlider type={"blog"} data={Blogs} />
      </Box>
    </Box>
  );
};

export default Home;
