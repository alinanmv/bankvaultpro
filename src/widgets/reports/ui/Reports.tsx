import GenerateReport from "@/features/reports/ui/GenerateReportCard";
import RecentReports from "@/features/reports/ui/RecentReports";
import { Box } from "@mui/material";
export default function ReportsWidget() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box width="30%">
          <GenerateReport />
        </Box>
        <Box width="69%">
          <RecentReports />
        </Box>
      </Box>
    </>
  );
}
