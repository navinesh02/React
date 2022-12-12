import { theme } from "../../utils/theme";

export const Layoutstyle = {
  rootSx: {
    width: "100vw",
    display: "flex",
  },
  sidebarSx: {
    width: "68px",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "0px !important",
    },
  },
  mainContentSx: {
    width: "100%",
    height: "auto",
  },
};
