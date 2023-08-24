import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext, useMode } from "./theme";
import HomePage from "./pages/HomePage";
import "./App.css";
import CredentialsPage from "./pages/CredentialsPage";
import WorksPage from "./pages/WorksPage";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/credentials" element={<CredentialsPage />} />
          <Route exact path="/works" element={<WorksPage />} />
        </Routes>
    </ColorModeContext.Provider>
  );
}

export default App;
