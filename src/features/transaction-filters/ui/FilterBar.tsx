import * as React from "react";
import { Box, Button, useTheme, Collapse } from "@mui/material";
import FilterIcon from "@/shared/ui/Icons/Flter";
import TextInput from "@/shared/ui/Input/TextInput";
import { GenericSelect } from "@/shared/ui/Selects/GenericSelect";
import DateSelect from "@/shared/ui/Selects/DateSelect";
import ThemeButton from "@/shared/ui/Button/ThemeButton";

export type FilterValues = {
  cardLast4: string;
  paymentType: string;
  startDate: string;
  endDate: string;
};

export interface FilterBarProps {
  values?: FilterValues;
  onChange?: (next: Partial<FilterValues>) => void;
  onApply?: () => void;
  onClear?: () => void;
  isOpen?: boolean;
  onToggleOpen?: () => void;
}

const EMPTY_FILTERS: FilterValues = {
  cardLast4: "",
  paymentType: "",
  startDate: "",
  endDate: "",
};

export default function FilterBar({
  values,
  onChange,
  onApply,
  onClear,
  isOpen,
  onToggleOpen,
}: FilterBarProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // безопасные ссылки
  const v = values ?? EMPTY_FILTERS;
  const safeChange = onChange ?? (() => {});
  const open = !!isOpen;
  const toggle = onToggleOpen ?? (() => {});

  return (
    <>
      {/* top bar */}
      <Box
        width={"100%"}
        height="70px"
        borderRadius={1}
        sx={{
          border: `1px solid ${isDark ? theme.palette.grey[900] : "#e0dedeff"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 15px",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <FilterIcon size={20} />
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 500,
              color: isDark ? "white" : "black",
              fontSize: "19px",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Filters
          </p>
        </Box>

        <Box>
          <Button
            variant="text"
            onClick={toggle}
            sx={{
              color: isDark ? "#fff" : "#000",
            }}
          >
            {open ? "Close" : "Open"}
          </Button>
        </Box>
      </Box>

      {/* bottom bar */}
      <Collapse in={open} timeout={200} unmountOnExit>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
            border: `1px solid ${isDark ? theme.palette.grey[900] : "#e0dedeff"}`,
            borderRadius: 1,

            px: 2,
          }}
        >
          {/* Card Number */}
          <Box
            width={"25%"}
            sx={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Box sx={{ width: "100%" }}>
              <TextInput
                label="Card Number"
                placeholder="Last 4 digits..."
                value={v.cardLast4}
                onChange={(e) => safeChange({ cardLast4: e.target.value })}
              />
            </Box>
          </Box>

          {/* Payment Type */}
          <Box
            width={"25%"}
            sx={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Box sx={{ width: "100%" }}>
              <GenericSelect
                label="Payment Type"
                value={v.paymentType}
                onChange={(val) => safeChange({ paymentType: String(val) })}
                options={["", "UzCard", "Humo", "Visa", "MasterCard"]}
              />
            </Box>
          </Box>

          {/* Date Range */}
          <Box
            width={"25%"}
            sx={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Box sx={{ width: "100%" }}>
              <DateSelect
                label="Date Range"
                startDate={v.startDate}
                endDate={v.endDate}
                onChangeStart={(val: string) => safeChange({ startDate: val })}
                onChangeEnd={(val: string) => safeChange({ endDate: val })}
              />
            </Box>
          </Box>

          {/* Apply / Clear */}
          <Box
            width={"20%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1.5,
              height: "100%",
              mt: 3,
            }}
          >
            <ThemeButton
              label="Apply"
              onClick={onApply}
              sx={{ width: "50%" }}
            />
            <Button
              onClick={onClear}
              sx={{ width: "50%", color: isDark ? "#fff" : "#000" }}
            >
              ✕ Clear
            </Button>
          </Box>
        </Box>
      </Collapse>
    </>
  );
}
