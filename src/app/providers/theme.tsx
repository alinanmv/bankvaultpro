import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";

type ThemeSetting = "light" | "dark" | "system";
type Mode = "light" | "dark";

interface ThemeCtx {
  setting: ThemeSetting;
  mode: Mode;
  setSetting: (s: ThemeSetting) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  setting: "system",
  mode: "light",
  setSetting: () => {},
  toggle: () => {},
});

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [setting, setSetting] = useState<ThemeSetting>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("themeSetting") as ThemeSetting) || "system";
    setSetting(saved);
  }, []);

  const mode: Mode =
    setting === "system" ? (systemPrefersDark ? "dark" : "light") : setting;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#000000ff" },
          secondary: { main: "#eeeeee" },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#0d0d0d",
            paper: mode === "light" ? "#ffffff" : "#0d0d0d",
           
          },
        },
        shape: { borderRadius: 10 },
        typography: {
          fontFamily:
            "'Roboto', system-ui, Arial, sans-serif, 'Merriweather', 'Times New Roman', serif",
          h1: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.2 },
        },
      }),
    [mode]
  );

  const toggle = () => setSetting((s) => (s === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ setting, mode, setSetting, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeContext);
