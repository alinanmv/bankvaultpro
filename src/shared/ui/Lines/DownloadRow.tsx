import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  LinearProgress
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { UploadIcon } from "@/shared/ui/Icons/Upload";

interface DownloadRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onDownload?: () => void;

  showLoading?: boolean;
  loadingFrom?: number;
  loadingDuration?: number;
  onLoadingComplete?: () => void;
}

export default function DownloadRow({
  icon,
  title,
  description,
  onDownload,
  showLoading = false,
  loadingFrom,
  loadingDuration = 1400,
  onLoadingComplete,
}: DownloadRowProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const bg = isDark ? "#1A1A1A" : theme.palette.grey[100];
  const titleColor = isDark ? theme.palette.grey[100] : theme.palette.grey[900];
  const descColor = isDark ? theme.palette.grey[400] : theme.palette.grey[600];
  const iconColor = isDark ? theme.palette.grey[200] : theme.palette.grey[800];

  const [progress, setProgress] = React.useState<number>(() => {
    if (!showLoading) return 100;
    const seed =
      typeof loadingFrom === "number"
        ? loadingFrom
        : Math.floor(20 + Math.random() * 40);
    return seed;
  });

  const [done, setDone] = React.useState<boolean>(() => !showLoading);

  React.useEffect(() => {
    if (!showLoading) {
      setProgress(100);
      setDone(true);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const from = progress;

    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / loadingDuration);
      const next = from + (100 - from) * t;
      setProgress(next);

      if (t < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        setDone(true);
        onLoadingComplete?.();
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [showLoading]);

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
        transition: "0.2s ease",
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

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ fontWeight: 500, fontSize: 16, color: titleColor }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14, color: descColor, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {description}
        </Typography>
      </Box>

  {!done ? (
  <Box
    sx={{
      width: 150,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 1,
    }}
  >
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        flex: 1,
        height: 4,
        borderRadius: 2,
        p: 0.5,
        backgroundColor: isDark ? "#333" : theme.palette.grey[300],
        "& .MuiLinearProgress-bar": {
          backgroundColor: isDark ? "#FFFFFF" : theme.palette.primary.main,
        },
      }}
    />
    <Typography
      sx={{
        fontSize: 12,
        color: descColor,
        minWidth: 28,
        textAlign: "right",
      }}
    >
      {Math.round(progress)}%
    </Typography>
  </Box>
) : (
  <IconButton onClick={onDownload} sx={{ color: iconColor }}>
    <UploadIcon />
  </IconButton>
)}

    </Box>
  );
}
