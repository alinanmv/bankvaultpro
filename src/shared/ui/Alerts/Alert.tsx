// shared/ui/AlertToast/AlertToast.tsx
import * as React from "react";
import {
  Snackbar,
  Paper,
  Box,
  Typography,
  IconButton,
  Slide,
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
  variant?: "default" | "success" | "error" | "warning" | "info";
  sx?: object;
};

const paletteByVariant: Record<
  NonNullable<AlertToastProps["variant"]>,
  (theme: any) => { bg: string; border: string }
> = {
  default: (theme) => ({
    bg: theme.palette.background.paper,
    border: theme.palette.divider,
  }),
  success: (theme) => ({ bg: theme.palette.paper, border: theme.palette.main }),
  error: (theme) => ({
    bg: theme.palette.error.light,
    border: theme.palette.error.main,
  }),
  warning: (theme) => ({
    bg: theme.palette.warning.light,
    border: theme.palette.warning.main,
  }),
  info: (theme) => ({
    bg: theme.palette.info.light,
    border: theme.palette.info.main,
  }),
};

export default function AlertToast({
  open,
  onClose,
  title,
  description,
  autoHideDuration = 4000,
  variant = "default",
  sx,
}: AlertToastProps) {
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
        elevation={8}
        sx={(theme) => {
          const c = paletteByVariant[variant](theme);
          return {
            minWidth: 320,
            maxWidth: 420,
            p: 3,
            pr: 8,
            borderRadius: 1,
            bgcolor: c.bg,
            border: `1px solid ${c.border}`,
            boxShadow: theme.shadows[8],
            ...sx,
          };
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={0.5}
          width={"100%"}
          alignItems={"start"}
        >
          <Typography fontSize={16} fontWeight={500} lineHeight={1.3}>
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
