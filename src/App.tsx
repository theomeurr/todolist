import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
}

export default App;
