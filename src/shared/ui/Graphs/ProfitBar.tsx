import { BarChart } from "@mui/x-charts";
import { type SxProps, useTheme } from "@mui/material/styles";

type Row = { month: string; profit: number };


interface Props {
  data?: Row[];
  currency?: string;
  locale?: string;
  height?: number;
  sx?: SxProps;
}

export default function ProfitByMonthBar({
  data,

  height = 320,
  sx,
}: Props) {
  const theme = useTheme();


  const barColor = theme.palette.mode === "dark" ? "#ffffff" : "#111111";

  return (
    <BarChart
      sx={{ width: "100%",p:0, ...sx }}
      dataset={data}
      xAxis={[{ dataKey: "month", scaleType: "band", disableTicks: true,
          disableLine: true }]}
      series={[
        {
          dataKey: "profit",
          color: barColor,
       
        },
      ]}
      yAxis={[{disableTicks: true,
          disableLine: true}]} 
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
      borderRadius={6}
      height={height}
    />
  );
}
