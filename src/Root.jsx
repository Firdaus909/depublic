import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box maxW={"475px"} mx={"auto"}>
      <Navbar pathname={pathname} />
      <Outlet />
      {pathname !== "/signin" && pathname !== "/signup" && <Footer />}
    </Box>
  );
};

export default Root;
