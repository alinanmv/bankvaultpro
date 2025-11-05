import DefaultCard from "@/shared/ui/Card/Card";
import TransactionBar from "@/shared/ui/Graphs/TransactionsBar";
import Box from "@mui/material/Box";
export default function TransactionsChart() {
  return (
    <DefaultCard
      title="Transactions by Type"
      description="Successful vs. failed transactions for each payment type."
      width="100%"
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", mt: 2 }}>
        <TransactionBar />
      </Box>
    </DefaultCard>
  );
}
