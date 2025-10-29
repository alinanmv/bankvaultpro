import Navigation from "@/widgets/navigation/ui/Navigation";
import { Container } from "@mui/material";
export default function Transactions(){
  return(  <>
  <Navigation/>
 <Container   maxWidth={false}
  sx={{
    maxWidth: "1870px",
    margin: "0 auto",
  }}>
<h1>Transactions</h1>
  </Container>
  </>);
}