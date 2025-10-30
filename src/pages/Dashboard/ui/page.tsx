import Navigation from "@/widgets/navigation/ui/Navigation"
import { Container } from "@mui/material"
import DashboardCards from "@/widgets/dashboard/ui/DashboardCards"
import ChartContainer from "@/widgets/dashboard/ui/ChartContainer"
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
   </Container>
   </>)
}