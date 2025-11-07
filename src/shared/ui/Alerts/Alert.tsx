// shared/ui/AlertToast/AlertToast.tsx
import * as React from "react";
import {
  Snackbar,
  Paper,
  Box,
  Typography,
  IconButton,
  Slide,
  useTheme,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type TransitionProps = Parameters<typeof Slide>[0];

function SlideFromRight(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

export type AlertToastProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: React.ReactNode;
  autoHideDuration?: number;
  sx?: object;
};

export default function AlertToast({
  open,
  onClose,
  title,
  description,
  autoHideDuration = 4000,
  sx,
}: AlertToastProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const bg = isDark ? "#0d0d0d" : "#ffffff";
  const border = isDark ? "#2a2a2a" : "#dddddd";

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      TransitionComponent={SlideFromRight}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={autoHideDuration || undefined}
      ClickAwayListenerProps={{ mouseEvent: "onMouseDown" }}
      sx={{ zIndex: (t) => t.zIndex.snackbar }}
    >
      <Paper
        elevation={0}
        sx={{
          minWidth: 320,
          maxWidth: 420,
          p: 3,
          pr: 8,
          borderRadius: 1,
          bgcolor: bg,
          border: `1px solid ${border}`,
          boxShadow: theme.shadows[8],
          ...sx,
        }}
      >
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Typography fontSize={16} fontWeight={500}>
            {title}
          </Typography>

          {description && (
            <Typography fontSize={14} color="text.secondary">
              {description}
            </Typography>
          )}
        </Box>

        <IconButton
          aria-label="close"
          size="small"
          onClick={onClose}
          sx={{ position: "absolute", top: 6, right: 6 }}
        >
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      </Paper>
    </Snackbar>
  );
}
