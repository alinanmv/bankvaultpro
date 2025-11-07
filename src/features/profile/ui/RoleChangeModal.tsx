import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import AlertToast from "@/shared/ui/Alerts/Alert";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmModal({
  open,
  title,
  description,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleConfirm = () => {
    onConfirm();
    onClose();
    setShowAlert(true);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: (theme) => {
            const isDark = theme.palette.mode === "dark";
            return {
              borderRadius: 2,
              p: 1,

              backgroundColor: isDark ? "#0d0d0d" : "#ffffff",
              border: `1px solid ${isDark ? "#2a2a2a" : "#dddddd"}`,

              backgroundImage: "none",

              boxShadow: "none",
            };
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, pb: 1 }}>{title}</DialogTitle>

        {description && (
          <DialogContent sx={{ pb: 2 }}>
            <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
              {description}
            </Typography>
          </DialogContent>
        )}

        <DialogActions sx={{ pb: 2, pt: 0 }}>
          <Button
            onClick={onClose}
            variant="outlined"
            sx={(theme) => ({
              textTransform: "none",
              borderColor:
                theme.palette.mode === "dark" ? "#ffffff33" : "inherit",
              color: theme.palette.mode === "dark" ? "#ffffff" : "inherit",
              "&:hover": {
                borderColor:
                  theme.palette.mode === "dark" ? "#ffffff55" : "inherit",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#ffffff0f" : "inherit",
              },
            })}
          >
            Cancel
          </Button>

          <Button
            onClick={handleConfirm}
            variant="contained"
            sx={(theme) => ({
              textTransform: "none",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "#ffffff"
                  : theme.palette.primary.main,
              color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "#e6e6e6"
                    : theme.palette.primary.dark,
              },
            })}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <AlertToast
        open={showAlert}
        onClose={() => setShowAlert(false)}
        title="Role Request Submitted"
        description={
          <>
            Your request for a new role has been sent for the <br /> approval.
          </>
        }
        variant="success"
        autoHideDuration={4000}
      />
    </>
  );
}
