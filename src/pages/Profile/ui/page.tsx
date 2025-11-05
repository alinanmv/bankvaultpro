import Navigation from "@/widgets/navigation/ui/Navigation";
import { Container } from "@mui/material";
import ProfileWidget from "@/widgets/profile/ui/ProfileWidget";
export default function Profile() {
  return (
    <>
      <Navigation />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1870px",
          margin: "0 auto",
          pb:3
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Profile</h1>
        <ProfileWidget />
      </Container>
    </>
  );
}
