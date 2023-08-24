import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        card: {
          500: "#002722",
        },
        text: "#fff",
        chatBoxReciever: "#fff",
      }
    : {
        card: {
          500: "#ffffff",
        },
        text: "#000",
        chatBoxReciever: "#fff",
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#001b1a",
            },
          }
        : {
            background: {
              default: "#f8f7fa",
            },
          }),
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(localStorage.getItem("dark"));
  if (localStorage.getItem("dark") === null) {
    localStorage.setItem("dark", "light");
  } else {
    localStorage.setItem("dark", mode);
  }

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  useEffect(() => {
    setMode(localStorage.getItem("dark"));
  }, []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
