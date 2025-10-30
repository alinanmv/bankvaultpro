import ProfitChart from "@/features/dashboard/ui/ProfitChart";
import TransactionsChart from "@/features/dashboard/ui/TransactionsChart";
import { Box } from "@mui/material";
export default function ChartContainer(){
    return(
<Box    sx={{
        display: "flex",
        gap: 2,
        alignItems: "stretch",
        width: "100%",
        flexWrap: { xs: "wrap", md: "nowrap" },
        mt:3 
      }}>
             <Box
        sx={{
          flexBasis: { xs: "100%", md: "55%" }, // фиксируем 55% на md+
          flexGrow: 0,
          flexShrink: 1,
          minWidth: 0, // важно, чтобы внутри графики не ломали верстку
        }}
      >
    <ProfitChart/>
    </Box>
       <Box
        sx={{
          flexBasis: { xs: "100%", md: "auto" }, // на md+ пусть растягивается
          flexGrow: 1,                          
          flexShrink: 1,
          minWidth: 0,
        }}
      >
    <TransactionsChart/>
    </Box>
</Box>);
}