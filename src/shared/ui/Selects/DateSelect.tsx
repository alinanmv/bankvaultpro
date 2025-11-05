import { FormControl, FormLabel, Box, TextField } from "@mui/material";
import type { SxProps } from "@mui/material/styles";

export interface SimpleDateRangeSelectProps {
  label: string;
  startDate: string;    // "2025-01-01"
  endDate: string;      // "2025-01-10"
  onChangeStart: (value: string) => void;
  onChangeEnd: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps;
}

export default function SimpleDateRangeSelect({
  label,
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
  fullWidth = true,
  disabled,
  sx,
}: SimpleDateRangeSelectProps) {
  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} sx={sx}>
      <FormLabel sx={{ mb: 0.5, color: "text.primary", fontSize: 14, fontWeight: 400 }}>
        {label}
      </FormLabel>

      <Box sx={{ display: "flex", gap: 1.5 }}>
        <TextField
          type="date"
          value={startDate}
          onChange={(e) => onChangeStart(e.target.value)}
          sx={{
            flex: 1,
            "& input": {
              height: 40,
              padding: "0 10px",
              fontSize: "15px",
            },
          }}
        />

        <TextField
          type="date"
          value={endDate}
          onChange={(e) => onChangeEnd(e.target.value)}
          sx={{
            flex: 1,
            "& input": {
              height: 40,
              padding: "0 10px",
              fontSize: "15px",
            },
          }}
        />
      </Box>
    </FormControl>
  );
}
