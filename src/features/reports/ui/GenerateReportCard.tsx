import React from "react";
import DefaultCard from "@/shared/ui/Card/Card";
import ThemeButton from "@/shared/ui/Button/ThemeButton";
import { GenericSelect } from "@/shared/ui/Selects/GenericSelect";
import { Box } from "@mui/material";

const reportOptions = [
  "Transaction Summary",
  "Failed Transactions",
  "Revenue by Payment Type",
] as const;
type ReportType = (typeof reportOptions)[number];

const paymentOptions = [
  "All Payment Types",
  "UzCard",
  "Humo",
  "Visa",
  "MasterCard",
];


export default function GenerateReport(){
    
 const [paymentType, setPaymentType] = React.useState<string | number | "">("");

  const [reportType, setReportType] = React.useState<ReportType>(reportOptions[0]);

    return(<>
    <DefaultCard title="Generate Report" description="Select a period and other criteria to generate a custom report." width={"500px"}>
        <Box sx={{display:"flex", flexDirection:"column", width:"100%",gap:3, mt:3}}>
<GenericSelect label="Report Type"
      options={reportOptions}
      value={reportType}
      onChange={(v) => setReportType(v as ReportType)}
     />
   <GenericSelect
      label="Payment Type"
      value={paymentType}                
      onChange={(v) => setPaymentType(v)} 
      options={paymentOptions}
    />
            <Box sx={{width:"100%"}}>
            <ThemeButton height={"40px"} label={"Export to Excel"} sx={{ borderRadius: "8px" }} width={"100%"}/>
            </Box>
            </Box>
    </DefaultCard>
    </>)
    
}