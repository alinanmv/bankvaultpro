import * as React from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import type { SxProps } from "@mui/material/styles";

type Value = string | number | "";

export type Option =
  | string
  | number
  | { label: React.ReactNode; value: string | number; disabled?: boolean };

type Normalized = { label: React.ReactNode; value: string | number; disabled?: boolean };

function normalizeOptions(options: Option[]): Normalized[] {
  return options.map((opt) =>
    typeof opt === "string" || typeof opt === "number"
      ? { label: String(opt), value: opt }
      : opt
  );
}

export interface GenericSelectProps {
  id?: string;
  label: string; // текст над селектом
  value: Value;
  onChange: (value: Value) => void;
  options: Option[];
  placeholder?: string; // disabled пункт
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

  const items = React.useMemo(() => normalizeOptions(options), [options]);

  // Если value пустое — выбираем первый option как дефолт
  React.useEffect(() => {
    if ((value === "" || value === undefined || value === null) && items.length > 0) {
      onChange(items[0].value as Value);
    }
  }, [items, value, onChange]);

  const handleChange = (e: SelectChangeEvent<Value>) => {
    const raw = e.target.value as Value; // MUI отдаёт string, но мы нормализуем ниже
    // Находим настоящий объект по строковому представлению значения,
    // чтобы корректно вернуть number, если опция была числом.
    const matched = items.find((i) => String(i.value) === String(raw));
    onChange((matched?.value as Value) ?? raw);
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} error={error} sx={sx}>
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
        sx={{ height: 40, fontSize:"15px"  }}
        renderValue={(val) => {
          if ((val === "" || val === undefined) && placeholder) {
            return <Box sx={{ color: "text.disabled" }}>{placeholder}</Box>;
          }
          const found = items.find((i) => String(i.value) === String(val));
          return (found?.label ?? String(val)) as React.ReactNode;
        }}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {items.map((opt) => (
          <MenuItem key={String(opt.value)} value={opt.value} disabled={opt.disabled} sx={{fontSize:"15px"}}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
