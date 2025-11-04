import { Box, Typography, type SxProps } from "@mui/material";
import StatusButton from "@/shared/ui/Button/StatusButton"
interface StatusLineItemProps {
  icon: React.ReactNode;
  title: string;
  status: "operational" | "degraded";
  sx: SxProps;
}

export default function StatusLineItem({ icon, title, status,sx }: StatusLineItemProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 2,                
        justifyContent:"space-between"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", fontSize: 22 }}>
        {icon}
      </Box>

      <Typography sx={{ flexGrow: 1, fontWeight: 500 }}>
        {title}
      </Typography>

      <StatusButton
        status={status}
        label={status === "operational" ? "Operational" : "Degraded"}
      />
    </Box>
  );
}
