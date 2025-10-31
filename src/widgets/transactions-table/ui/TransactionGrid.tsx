import DefaultCard from "@/shared/ui/Card/Card";
import TransactionTable from "@/features/transactions/TransactionsTable";
import { fetchTransactionsMock} from "@/shared/api/transactions";
import {  type SxProps } from "@mui/material";
import React from "react"
interface TransactionGridProps{
  sx?: SxProps; 
}
export default function TransactionGrid({ sx }:  TransactionGridProps){
      const [rows, setRows] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      React.useEffect(() => {
        fetchTransactionsMock(120).then((data) => {
          setRows(data);
          setLoading(false);
        });
      }, []);
      return(
    <DefaultCard   title="Recent Transactions" width="100%" height={675}  sx={sx}>
     <TransactionTable rows={rows} isLoading={loading} />
    </DefaultCard>);
}