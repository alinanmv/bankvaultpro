import * as React from "react";
import { Box, Stack, Typography, Select, MenuItem } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

interface SettingSelectOption {
  label: string;
  value: string | number;
}

interface SettingSelectProps {
  title: string;
  description?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  options: SettingSelectOption[];
  disabled?: boolean;
  sx?: SxProps;
}

export default function SettingSelect({
  title,
  description,
  value,
  onChange,
  options,
  disabled = false,
  sx,
}: SettingSelectProps) {
  return (
    <Stack spacing={1.2} sx={{ width: "100%", ...sx }}>
      <Stack>
        <Typography variant="body1" fontWeight={500} fontSize={14}>
          {title}
        </Typography>

        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px"}}>
            {description}
          </Typography>
        )}
      </Stack>

      <Select
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        sx={{ maxWidth: 260, fontSize: "14px" }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
