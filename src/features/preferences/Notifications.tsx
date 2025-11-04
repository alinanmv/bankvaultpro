import * as React from "react";
import { Box, Typography } from "@mui/material";
import SettingRow from "@/shared/ui/Lines/SettingRow";
import SettingSelect from "@/shared/ui/Lines/SettingSelect";

export default function Notification() {
  const [frequency, setFrequency] = React.useState("immediately");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
        Notifications
      </Typography>

      <SettingRow
        title="Email Notifications"
        description="Receive email notifications for important account activity."
        defaultChecked
      />

      <SettingRow
        title="Push Notifications"
        description="Get push notifications on your registered devices."
       
      />

      <SettingSelect
        title="Notification Frequency"
        description="How often we should send you updates"
        value={frequency}
        onChange={(v) => setFrequency(String(v))}
        options={[
          { label: "Immediately", value: "immediately" },
          { label: "Daily Summary", value: "daily" },
          { label: "Weekly Summary", value: "weekly" },
          { label: "Never", value: "never" },
        ]}
      />
    </Box>
  );
}
