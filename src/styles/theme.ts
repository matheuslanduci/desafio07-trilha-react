import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "500": "#FFBA08"
    },
    light: {
      "900": "#FFFFFF",
      "700": "#F5F8FA",
      "300": "#DADADA"
    },
    dark: {
      "900": "#000000",
      "500": "#47585B",
      "200": "#999999"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    secondary: "Barlow"
  },
  styles: {
    global: {
      body: {
        bg: "light.700",
        color: "dark.500"
      }
    }
  }
});
