import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { fonts } from "./typography";
import colors from "./colors";

const theme = extendTheme(
  {
    fonts,
    colors,
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

export default theme;
