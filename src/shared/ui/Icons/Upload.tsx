import * as React from "react";
import { Box } from "@mui/material";
import { useTheme, type SxProps } from "@mui/material/styles";

interface UploadIconProps extends React.SVGProps<SVGSVGElement> {
  sx?: SxProps;
}

export function UploadIcon({ sx, ...props }: UploadIconProps) {
  const theme = useTheme();

  const color =
    theme.palette.mode === "dark"
      ? theme.palette.grey[200]
      : theme.palette.grey[800];

  return (
    <Box
      sx={{
        display: "inline-flex",
        lineHeight: 0,
        color,
        ...sx, // ← пользовательские стили перекрывают дефолт
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props} // ← теперь можно менять любые атрибуты svg
      >
        <path
          d="M12 16L12 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13L11.913 15.913C11.961 15.961 12.039 15.961 12.087 15.913L15 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
