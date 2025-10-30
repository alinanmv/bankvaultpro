import DefaultCard from '@/shared/ui/Card/Card'
import TransactionBar from '@/shared/ui/Graphs/TransactionsBar'
export default function TransactionsChart(){
   return(
    <DefaultCard
      title="Transactions by Type"
      description='Successful vs. failed transactions for each payment type.'
      height={550}
      width="100%"
    >
    
    <TransactionBar/>
    </DefaultCard>
    
        );
     }
