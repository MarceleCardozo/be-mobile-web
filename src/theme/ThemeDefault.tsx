import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      blue: "#5A84C0",
      gradient: "linear-gradient(180deg, #5A84C0 0%, #594ED2 100%)",
    },
    neutral: {
      black: "#1C1C1C",
      gray20: "#9E9E9E",
      gray10: "#DFDFDF",
      gray00: "#F0F0F0",
      white: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "24px",
    },
    h2: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "16px",
    },
    h3: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
    },
  },
  spacing: {
    medium80: "80px",
    medium60: "60px",
    medium40: "40px",
    medium32: "32px",
    regular28: "28px",
    regular20: "20px",
    regular16: "16px",
    little08: "08px",
    little04: "04px",
  },
  shadows: {
    shadow1: "0px 1px 2px 0px #00000033",
    shadow2: "0px 2px 4px 0px #00000033",
  },
};

interface ThemeDefaultProps {
  children: React.ReactNode;
}

function ThemeDefault({ children }: ThemeDefaultProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeDefault;
