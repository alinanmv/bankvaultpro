import DefaultCard from "@/shared/ui/Card/Card";
import { type SxProps } from "@mui/material";
import System from '@/shared/ui/Icons/CardIcon'
import StatusLineItem from "@/shared/ui/Lines/StatusLineItem";
import Check from '@/shared/ui/Icons/Check'
import{Box} from "@mui/material";
interface SystemHealthProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

export default function SystemHealth({ sx }: SystemHealthProps) {
  return (
    <DefaultCard
    icon={<System/>}
      title="System Health"
      description="Real-time system health check status."
      height={799}
      sx={sx} >
    <Box sx={{mt:1, display:"flex", flexDirection:"column", justifyContent:"space-around", height:"150px", width:"100%"}}>
     <StatusLineItem icon={<Check />} title="API Gateway" status="operational" sx={null} />
     <StatusLineItem icon={<Check />} title="Transaction Processor" status="operational" sx={null} />
     <StatusLineItem icon={<Check />} title="Database Connectivity" status="operational" sx={null} />
     <StatusLineItem icon={<Check />} title="Third-party Integrations" status="degraded" sx={null} />
</Box>


    </DefaultCard>
  );
}
