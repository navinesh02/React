import { theme } from "../../utils/theme";

export const Chartstyle = {
  cardImgSx: {
    width: "21px",
    height: "21px",
  },
  cardSx: {
    padding: "8px",

    [theme.breakpoints.only("xs")]: {
      width: "115%",
    },
  },
};
