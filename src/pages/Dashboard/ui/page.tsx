import Navigation from "@/widgets/navigation/ui/Navigation"
import { Container } from "@mui/material"
import DashboardCards from "@/widgets/dashboard/ui/DashboardCards"
export default function DashboardPage(){
   return( <>
   <Navigation/>
   <Container   maxWidth={false}
  sx={{
    maxWidth: "1870px",
    margin: "0 auto",
  }}>
   <h1>Dashboard</h1>
   <DashboardCards/>
   </Container>
   </>)
}