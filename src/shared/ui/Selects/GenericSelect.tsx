import * as React from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  FormLabel,
  useTheme
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import type { SxProps } from "@mui/material/styles";

type Value = string;

export interface GenericSelectProps {
  id?: string;
  label: string; // текст над селектом
  value: Value; // контролируемое значение
  onChange: (value: Value) => void;
  options: string[]; // просто массив строк
  placeholder?: string; // показывается, когда value === ""
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  sx?: SxProps;
}

export function GenericSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  fullWidth = true,
  disabled,
  error,
  helperText,
  sx,
}: GenericSelectProps) {
  const baseId = id ?? (label + "-select").replace(/\s+/g, "-").toLowerCase();
  const labelId = `${baseId}-label`;
  const selectId = baseId;
    const theme = useTheme();
  const handleChange = (e: SelectChangeEvent<Value>) => {
    onChange(e.target.value as Value);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      disabled={disabled}
      error={error}
      sx={sx}
    >
      <FormLabel
        id={labelId}
        sx={{ mb: 0.5, color: "text.primary", fontSize: 14, fontWeight: 400 }}
      >
        {label}
      </FormLabel>

      <Select<Value>
        id={selectId}
        aria-labelledby={labelId}
        value={value}
        onChange={handleChange}
        displayEmpty={Boolean(placeholder)}
        sx={{ height: 40, fontSize: "15px",           border: `0px solid ${theme.palette.divider}`,
 }}
        renderValue={(val) => {
          if (val === "" && placeholder) {
            return <Box sx={{ color: "text.disabled" }}>{placeholder}</Box>;
          }
          return val;
        }}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}

        {options.map((opt) => (
          <MenuItem key={opt} value={opt} sx={{ fontSize: "15px" }}>
            {opt}
          </MenuItem>
        ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
