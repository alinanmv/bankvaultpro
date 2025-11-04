import Navigation from "@/widgets/navigation/ui/Navigation";
import {Container} from '@mui/material'
import PreferencesWidget from "@/widgets/preferences/PrefWidget";
export default function Settings(){

  
 return(  <><Navigation/>
    <Container   maxWidth={false}
  sx={{
    maxWidth: "1870px",
    margin: "0 auto",
  }}>
  <h1 style={{fontSize:"1.5rem",fontWeight:"500"}}>Settings</h1>
<PreferencesWidget/>
  </Container>
  </>);
}