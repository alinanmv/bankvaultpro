import { Card, CardContent, Box, Typography, useTheme } from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import * as React from "react";

type IconComponent = React.ElementType<SvgIconProps>;

interface DashCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: IconComponent;
}

export default function DashCard({
  title,
  value,
  description,
  icon: Icon,
}: DashCardProps) {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        p: 3,
        borderRadius: "10px",
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        paddingBottom: 0,
      }}
    >
      <CardContent sx={{ p: 0, flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
            {title}
          </Typography>
          <Icon sx={{ fontSize: 18, opacity: 0.7 }} />
        </Box>

        <Typography variant="h5" fontWeight={700} mb={1} sx={{ m: 0, mt: 1 }}>
          {value}
        </Typography>

        {description && (
          <Typography color="text.secondary" sx={{ fontSize: "12px" }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
