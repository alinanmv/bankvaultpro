import TransactionTable from "@/features/transactions/TransactionsTable";
import Navigation from "@/widgets/navigation/ui/Navigation";
import { Container } from "@mui/material";
import { fetchTransactionsMock } from "@/shared/api/transactions";
import React from "react";
export default function Transactions() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchTransactionsMock(120).then((data) => {
      setRows(data);
      setLoading(false);
    });
  }, []);
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
        <TransactionTable rows={rows} isLoading={loading} />
      </Container>
    </>
  );
}
