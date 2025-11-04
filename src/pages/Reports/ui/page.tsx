import Navigation from "@/widgets/navigation/ui/Navigation";
import { Container } from "@mui/material";
import ReportsWidget from "@/widgets/reports/ui/Reports";
export default function Reports(){
    return(<><Navigation/>
     <Container   maxWidth={false}
  sx={{
    maxWidth: "1870px",
    margin: "0 auto",
  }}>
<h1 style={{fontSize:"1.5rem",fontWeight:"500"}}>Reports</h1>
<ReportsWidget/>
  </Container>
    </>)
}