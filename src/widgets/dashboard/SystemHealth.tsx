import DefaultCard from "@/shared/ui/Card/Card";
import { type SxProps } from "@mui/material";

interface SystemHealthProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

export default function SystemHealth({ sx, children }: SystemHealthProps) {
  return (
    <DefaultCard
      title="System Health"
      description="Real-time system health check status."
      height={799}
      sx={sx} >
    
      {children}
    </DefaultCard>
  );
}
