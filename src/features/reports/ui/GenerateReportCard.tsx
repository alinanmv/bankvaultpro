import React from "react";
import DefaultCard from "@/shared/ui/Card/Card";
import ThemeButton from "@/shared/ui/Button/ThemeButton";
import { GenericSelect } from "@/shared/ui/Selects/GenericSelect";
import { Box, useTheme } from "@mui/material";
import DateSelect from "@/shared/ui/Selects/DateSelect";
import { UploadIcon } from "@/shared/ui/Icons/Upload";
import AlertToast from "@/shared/ui/Alerts/Alert";

export default function GenerateReport() {
  const [report, setReport] = React.useState("Transaction Summary");
  const [payment, setPayment] = React.useState("All payment Types");
  const [open, setOpen] = React.useState(false);
  const [start, setStart] = React.useState("2025-02-01");
  const [end, setEnd] = React.useState("2025-02-10");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <>
      <DefaultCard
        title="Generate Report"
        description="Select a period and other criteria to generate a custom report."
        width="100%"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 3,
            mt: 3,
          }}
        >
          <GenericSelect
            label="Report Type"
            value={report}
            onChange={setReport}
            options={[
              "Transaction Summary",
              "Failed Transactions",
              "Revenue by Payment Type",
            ]}
          />
          <DateSelect
            label="Date Range"
            startDate={start}
            endDate={end}
            onChangeStart={setStart}
            onChangeEnd={setEnd}
          />
          <GenericSelect
            label="Payment Method"
            value={payment}
            onChange={setPayment}
            options={["UzCard", "Humo", "Visa", "MasterCard"]}
          />
        </Box>
        <Box sx={{ width: "100%", mt: 3 }}>
          <ThemeButton
            icon={
              <UploadIcon
                sx={{
                  color: isDark
                    ? theme.palette.common.black
                    : theme.palette.white,
                  height: "25px",
                }}
              />
            }
            height={"40px"}
            label={"Export to Excel"}
            sx={{ borderRadius: "8px", display: "flex", alignItems: "center" }}
            width={"100%"}
            onClick={() => setOpen(true)}
          />
        </Box>
      </DefaultCard>
      <AlertToast
        open={open}
        onClose={() => setOpen(false)}
        title="Generating Report..."
        description={
          <>
            Your report is being prepared and will download <br />
            shortly.
          </>
        }
        variant="success"
        autoHideDuration={4000}
      />
    </>
  );
}
