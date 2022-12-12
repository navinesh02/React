import { ThemeProvider } from "@mui/material";
import AppRoute from "./Router/index";
import { theme } from "./utils/theme";
 
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
};

export default App;
