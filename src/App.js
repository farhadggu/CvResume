import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext, useMode } from "./theme";
import HomePage from "./pages/HomePage";
import "./App.css";
import CredentialsPage from "./pages/CredentialsPage";
import WorksPage from "./pages/WorksPage";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/AboutPage";
import { useEffect, useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  console.log("theme")
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/credentials" element={<CredentialsPage />} />
          <Route exact path="/works" element={<WorksPage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </ColorModeContext.Provider>
  );
}

export default App;
