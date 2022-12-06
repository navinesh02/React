import { theme } from "../../theme";
export const PropertiesStyle = {
  cardSx: {
    margin: "18px 15px",
    borderRadius: "10px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "12px",
    height: "75vh",
    [theme.breakpoints.only("xs")]: {
      width: "265px",
      marginBottom: "60px",
    },
  },
  tableContainerSx: {
    marginTop: "5px",
    height: "60vh !important",
    overflow: "auto !important",
  },
  textSx: {
    [theme.breakpoints.only("xs")]: {
      width: "200px",
    },
  },

  tableHeaderSx: {
    "& th": {
      backgroundColor: "#F5F7FA",
      padding: "12px 10px",
      marginBottom: "10px",
      border: 0,
      borderRadius: "3px",
      color: "#4E5A6B",
      font: "normal normal 600 12px/16px NunitoSans-Regular",
    },
  },
  tableRowSx: {
    "& td p": {
      font: "normal normal 600 16px/16px NunitoSans-SemiBold",
    },
  },
  paperSx: {
    "& .MuiPaper-root.MuiPaper-elevation": {
      boxShadow: "0px 1px 10px #0717411F !important",
    },
  },
  paperSx: {
    display: { xs: "block", sm: "none", md: "none", lg: "none" },
    position: "fixed",
    zIndex: 99,
    // backgroundColor: " #333"
  },
  bottomSx: {
    backgroundColor: theme.palette.background.darkBg,
  },
  menuItemSx: {
    "& .MuiPaper-root": {
      background: "#FFFFFF",
      boxShadow: "0px 2px 9px -3px #0717411F",
      borderRadius: "12px",
      padding: "2px 10px",
      color: "#071741",
      "& li": {
        font: "normal normal 600 14px/19px NunitoSans-Bold !important",
        borderRadius: "12px",
        padding: "5px 5px",
      },
    },
  },
};
