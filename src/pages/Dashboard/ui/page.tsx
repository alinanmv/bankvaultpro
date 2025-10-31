import Navigation from "@/widgets/navigation/ui/Navigation"
import TransactionCard from "@/widgets/transactions-table/ui/TransactionCard"
import { Box, Container } from "@mui/material"
import DashboardCards from "@/widgets/dashboard/ui/DashboardCards"
import ChartContainer from "@/widgets/dashboard/ui/ChartContainer"
import SystemHealth from "@/widgets/dashboard/SystemHealth"
export default function DashboardPage(){

   return( <>
   <Navigation/>
   <Container   maxWidth={false}
  sx={{
    maxWidth: "1870px",
    margin: "0 auto",
  }}>
   <h1 style={{fontSize:"1.5rem",fontWeight:"500"}}>Dashboard</h1>
   <DashboardCards/>
   <ChartContainer/>

   <Box sx={{
        display: "flex",
        gap:2,
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
        flexWrap: { xs: "wrap", md: "nowrap" },
        mt:3 }}>

    <Box   sx={{
          flexBasis: { xs: "100%", md: "50%" }, // фиксируем 55% на md+
          flexGrow: 0,
          flexShrink: 1,
          minWidth: 0, // важно, чтобы внутри графики не ломали верстку
        }}>
   <TransactionCard sx={{width:"100%"}} />
   </Box>

   <Box
        sx={{
          flexBasis: { xs: "100%", md: "50%" }, // на md+ пусть растягивается
          flexGrow: 1,                          
          flexShrink: 1,
          minWidth: 0,
        }}>
   <SystemHealth sx={{width:"100%"}} />
   </Box>

   </Box>
   </Container>
   </>)
}