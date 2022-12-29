import { ThemeProvider } from "@emotion/react";
import theme from "./styles";
import {Header} from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
