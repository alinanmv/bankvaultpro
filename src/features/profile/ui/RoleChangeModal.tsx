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
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
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
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleConfirm}
            variant="contained"
            sx={{ textTransform: "none" }}
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
