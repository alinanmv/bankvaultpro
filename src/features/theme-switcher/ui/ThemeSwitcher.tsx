import { useState } from "react";
import { IconButton } from "@mui/material";
import ThemeSelect from "@/shared/ui/Theme/ThemeSelect";
import { Sun } from "@/shared/ui/Icons/Sun";
import { Moon } from "@/shared/ui/Icons/Moon";
import { useThemeMode } from "@/app/providers/theme";
import {Box} from "@mui/material";
export function ThemeSwitcher(props:any) {
  const { setting } = useThemeMode();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
    <Box sx={props.sx}>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        {setting === "dark" ? <Moon /> : <Sun />}
      </IconButton>
</Box>
      <ThemeSelect
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuProps={{
          anchorEl,
          anchorOrigin: { vertical: "bottom", horizontal: "right" },
          transformOrigin: { vertical: "top", horizontal: "right" },
        }}
        // скрываем поле, оставляем только меню
        sx={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
