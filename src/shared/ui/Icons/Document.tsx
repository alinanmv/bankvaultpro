import * as React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function DocumentSVG(props: React.SVGProps<SVGSVGElement>) {
  const theme = useTheme();

  const color =
    theme.palette.mode === "dark"
      ? theme.palette.grey[300]
      : theme.palette.grey[600];

  return (
    <Box sx={{ display: "inline-flex", lineHeight: 0, color }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
        />
      </svg>
    </Box>
  );
}
