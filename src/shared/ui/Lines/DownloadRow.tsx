import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { UploadIcon } from "@/shared/ui/Icons/Upload";

interface DownloadRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onDownload?: () => void;
}

export default function DownloadRow({
  icon,
  title,
  description,
  onDownload,
}: DownloadRowProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const bg = isDark ? "#1A1A1A" : theme.palette.grey[100];
  const titleColor = isDark ? theme.palette.grey[100] : theme.palette.grey[900];
  const descColor = isDark ? theme.palette.grey[400] : theme.palette.grey[600];
  const iconColor = isDark ? theme.palette.grey[200] : theme.palette.grey[800];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        borderRadius: "12px",
        height: "70px",
        width: "100%",
        backgroundColor: bg,
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: iconColor,
        }}
      >
        {icon}
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontWeight: 500, fontSize: 16, color: titleColor }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14, color: descColor }}>
          {description}
        </Typography>
      </Box>

      <IconButton onClick={onDownload} sx={{ color: iconColor }}>
        <UploadIcon />
      </IconButton>
    </Box>
  );
}
