import DefaultCard from "@/shared/ui/Card/Card";
import ProfitByMonthBar from "@/shared/ui/Graphs/ProfitBar";
import { Box } from "@mui/material";
 export default function ProfitChart(){
    return(
<DefaultCard
  title="Company Overview"
  width="100%"
  height={445}
>
   <Box sx={{display:"flex", alignItems:"center", width:"100%",mt:2}}>
  <ProfitByMonthBar currency="USD"
  locale="en-US"
  data = {[
  { month: "Jan", profit: 24000 },
  { month: "Feb", profit: 19500 },
  { month: "Mar", profit: 22500 },
  { month: "Apr", profit: 21000 },
  { month: "May", profit: 27500 },
  { month: "Jun", profit: 26000 },
  { month: "Jul", profit: 30500 },
  { month: "Aug", profit: 29500 },
  { month: "Sep", profit: 23000 },
  { month: "Oct", profit: 24500 },
  { month: "Nov", profit: 32000 },
  { month: "Dec", profit: 28500 },
]}
/>
</Box>
</DefaultCard>

    );
 }