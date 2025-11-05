import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { SxProps } from "@mui/material/styles";
import IOSMonoSwitch from "../Button/Switch";

interface SettingRowProps {
  title: string;
  description?: string;
  /** Controlled mode */
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Uncontrolled mode */
  defaultChecked?: boolean;
  disabled?: boolean;
  gap?: number;
  sx?: SxProps;
}

export default function SettingRow({
  title,
  description,
  checked,
  onChange,
  defaultChecked,
  disabled = false,
  gap = 2,
  sx,
}: SettingRowProps) {
  const theme = useTheme();
  const isControlled = typeof checked === "boolean";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap,
        width: "100%",
        ...sx,
      }}
    >
      <Stack sx={{ minWidth: 0, flex: 1 }}>
        <Typography variant="body1" fontWeight={500} noWrap fontSize={14}>
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{ fontSize: "12px" }}
          >
            {description}
          </Typography>
        )}
      </Stack>

      <IOSMonoSwitch
        // controlled vs uncontrolled
        checked={isControlled ? checked : undefined}
        defaultChecked={!isControlled ? defaultChecked : undefined}
        onChange={(e, val) => onChange?.(val)}
        disabled={disabled}
        inputProps={{ "aria-label": title }}
      />
    </Box>
  );
}
