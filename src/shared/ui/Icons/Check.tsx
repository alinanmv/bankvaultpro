import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";

export default function Dollar(props: SvgIconProps) {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      viewBox="0 0 24 24"
      sx={{
        color: theme.palette.grey[500],
        ...props.sx,
      }}
    >
      <path
        d="M11 17H20M8 15L5.5 18L4 17M11 12H20M8 10L5.5 13L4 12M11 7H20M8 5L5.5 8L4 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
}
