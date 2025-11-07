import Navigation from "@/widgets/navigation/ui/Navigation";
import { Container } from "@mui/material";
import FilteredTransactions from "@/widgets/transactions/ui/FilteredTransactions";
export default function Transactions() {
  return (
    <>
      <Navigation />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1870px",
          margin: "0 auto",
          pb: 3,
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Transactions</h1>
        <FilteredTransactions />
      </Container>
    </>
  );
}
