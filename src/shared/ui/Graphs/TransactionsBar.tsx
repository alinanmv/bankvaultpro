import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme, type SxProps } from "@mui/material/styles";




interface Props {
  height?: number;
  sx?: SxProps;
  providers?: string[];                   
  totalRange?: [number, number];           
  successRateRange?: [number, number];      
  stacked?: boolean;                        
}

export default function TransactionBar({
  height = 300,
  sx,
  providers = ["Uzcard", "Humo", "Visa", "MasterCard"],
  totalRange = [2500, 6000],
  successRateRange = [0.78, 0.97],
  stacked = false,
}: Props) {
  const theme = useTheme();

  
  const { success, failed } = React.useMemo(() => {
    const randInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const randFloat = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const successArr: number[] = [];
    const failedArr: number[] = [];

    for (let i = 0; i < providers.length; i++) {
      const total = randInt(totalRange[0], totalRange[1]);
      const rate = randFloat(successRateRange[0], successRateRange[1]);
      const ok = Math.round(total * rate);
      const bad = Math.max(total - ok, 0);
      successArr.push(ok);
      failedArr.push(bad);
    }

    return { success: successArr, failed: failedArr };
  }, [providers.length, totalRange[0], totalRange[1], successRateRange[0], successRateRange[1]]);

  const successColor = theme.palette.success.main;
  const failedColor = theme.palette.error.main;

  const valueFormatter = (v: number | null) =>
    v == null ? "" : new Intl.NumberFormat("en-US").format(v);

  return (
    <BarChart
      xAxis={[
        {
          data: providers,
          disableTicks: true,
          disableLine: true,
        },
      ]}
      series={[
        {
          data: success,
          label: "Successful",
          color: successColor,
          valueFormatter,
          ...(stacked ? { stack: "t" } : {}),
        },
        {
          data: failed,
          label: "Failed",
          color: failedColor,
          valueFormatter,
          ...(stacked ? { stack: "t" } : {}),
        },
      ]}
      height={height}
      yAxis={[{disableLine: true}]}                                
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
      borderRadius={6}
      sx={{ width: "100%", p: 0, ...sx }}
    />
  );
}
