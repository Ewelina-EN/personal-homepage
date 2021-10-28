import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomapage/PersonalHomepage";
import { theme } from "./theme";

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};