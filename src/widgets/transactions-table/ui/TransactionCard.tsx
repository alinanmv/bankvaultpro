import { Box, type SxProps } from "@mui/material";
import TransactionGrid from "./TransactionGrid";
import DefaultCard from "@/shared/ui/Card/Card";
//import ViewAllButton from "@/shared/ui/Button/ViewAll";
interface TransactionCardProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

export default function TransactionCard({ sx }: TransactionCardProps) {
  return (
    <DefaultCard
      title="Recent Transactions"
      description="A quick look at the latest transactions."
      sx={sx}
    >
      <TransactionGrid sx={{ mt: 3 }} />
    </DefaultCard>
  );
}
