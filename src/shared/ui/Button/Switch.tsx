import * as React from "react";
import Switch, { switchClasses } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import type { SwitchProps } from "@mui/material/Switch";

const IOSMonoSwitchRoot = styled((props: SwitchProps) => (
  <Switch disableRipple focusVisibleClassName="Mui-focusVisible" {...props} />
))(({ theme }) => {
  const isLight = theme.palette.mode === "light";

  const trackOn = isLight ? "#000" : "#fff"; // когда включен
  const trackOff = "#d9d9d9"; // когда выключен (всегда светло-серый)

  const thumbOn = isLight ? "#fff" : "#000"; // кружок при on
  const thumbOff = isLight ? "#fff" : "#000"; // кружок при off (тот же)

  const disabledOpacity = theme.palette.action.disabledOpacity;

  return {
    width: 44,
    height: 25,
    padding: 0,

    [`& .${switchClasses.switchBase}`]: {
      padding: 0,
      margin: 2,
      transitionDuration: "200ms",

      // ON
      [`&.Mui-checked`]: {
        transform: "translateX(18px)",
        color: thumbOn,
        [`& + .${switchClasses.track}`]: {
          backgroundColor: trackOn,
          opacity: 1,
          border: 0,
        },
      },

      // Focus ring
      [`&.Mui-focusVisible .${switchClasses.thumb}`]: {
        boxShadow: "0 0 0 3px rgba(0,0,0,0.25)",
      },

      // Disabled
      [`&.Mui-disabled`]: {
        [`& + .${switchClasses.track}`]: {
          opacity: disabledOpacity,
        },
      },
    },

    // Thumb
    [`& .${switchClasses.thumb}`]: {
      backgroundColor: thumbOff,
      boxShadow: "none",
      width: 21,
      height: 21,
    },

    // Track
    [`& .${switchClasses.track}`]: {
      borderRadius: 28 / 2,
      backgroundColor: trackOff, // OFF state always light gray
      opacity: 1,
      transition: theme.transitions.create(["background-color", "opacity"], {
        duration: 200,
      }),
    },
  };
});

export default function IOSMonoSwitch(props: SwitchProps) {
  return <IOSMonoSwitchRoot {...props} />;
}
