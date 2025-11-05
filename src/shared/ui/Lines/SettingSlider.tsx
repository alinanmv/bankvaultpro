import * as React from "react";
import { Box, Stack, Typography, Slider } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

interface SettingSliderProps {
  title: string;
  description?: string;
  /** Контролируемое значение */
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Показывать отметки на шкале */
  marks?: boolean | { value: number; label?: string }[];
  /** Например "%", "px", "ms" */
  suffix?: string;
  disabled?: boolean;
  sx?: SxProps;
}

export default function SettingSlider({
  title,
  description,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  marks = false,
  suffix = "",
  disabled = false,
  sx,
}: SettingSliderProps) {
  const format = (v: number) => `${v}${suffix}`;

  return (
    <Box sx={{ width: "100%", padding: 0, ...sx }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" fontWeight={500} noWrap fontSize={14}>
          {title}
        </Typography>
      </Box>

      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}

      <Slider
        value={value}
        onChange={(_, v) => onChange(v as number)}
        min={min}
        max={max}
        step={step}
        marks={marks}
        valueLabelDisplay="auto"
        valueLabelFormat={format}
        disabled={disabled}
        aria-label={title}
        sx={(theme) => ({
          height: 8,
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          padding: "6px 0",

          // Линия фона (track пустая часть)
          "& .MuiSlider-track": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.7)"
                : "rgba(0,0,0,0.8)",
            border: "none",
          },

          "& .MuiSlider-rail": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.25)"
                : "rgba(0,0,0,0.25)",
            opacity: 1,
          },

          // Кружок
          "& .MuiSlider-thumb": {
            width: 20,
            height: 20,
            backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
            border:
              theme.palette.mode === "light"
                ? "2px solid #000"
                : "2px solid #fff",

            borderRadius: "50%",
            transition: "0.2s",

            "&:hover": {
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 0 0 4px rgba(0,0,0,0.15)"
                  : "0 0 0 4px rgba(255,255,255,0.25)",
            },

            "&.Mui-focusVisible": {
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 0 0 6px rgba(0,0,0,0.25)"
                  : "0 0 0 6px rgba(255,255,255,0.35)",
            },
          },

          // Отметки (если marks = true)
          "& .MuiSlider-mark": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.5)",
            width: 2,
            borderRadius: 2,
          },

          "& .MuiSlider-markActive": {
            backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
          },
        })}
      />
    </Box>
  );
}
