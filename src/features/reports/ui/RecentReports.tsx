import DefaultCard from "@/shared/ui/Card/Card";
import DownloadRow from "@/shared/ui/Lines/DownloadRow";
import { DocumentSVG } from "@/shared/ui/Icons/Document";
import { Box } from "@mui/material";
export default function RecentReports() {
  return (
    <>
      <DefaultCard
        title="Recent Reports"
        description="View and download your recently generated reports."
        width="100%"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            mt: 3,
          }}
        >
          <DownloadRow
            icon={<DocumentSVG />}
            title={"transaction_summary_2023-10.csv"}
            description={"Generated on 28.10.2023"}
          />
          <DownloadRow
            icon={<DocumentSVG />}
            title={"failed_transactions_2023-09.xlsx"}
            description={"Generated on 30.09.2023"}
            showLoading
            loadingFrom={37}
            loadingDuration={6000}
          />
          <DownloadRow
            icon={<DocumentSVG />}
            title={"revenue_by_type_2023-11.csv"}
            description={"Generated on 05.11.2023"}
          />
          <DownloadRow
            icon={<DocumentSVG />}
            title={"monthly_overview_2023-08.pdf"}
            description={"Generated on 01.09.2023"}
            showLoading
            loadingFrom={64}
            loadingDuration={3000}
          />
          <DownloadRow
            icon={<DocumentSVG />}
            title={"full_export_2023_q4.csv"}
            description={"Generated on 06.11.2023"}
          />
        </Box>
      </DefaultCard>
    </>
  );
}
