import { theme } from "../../theme";

export const DashboardStyle = {
  tableHeaderSx: {
    "& th": {
      backgroundColor: "#F5F7FA",
      padding: "12px 10px",
      marginBottom: "10px",
      borderRadius: "3px",
      border: "3px",
      color: "#4E5A6B",
      font: "normal normal 600 12px/16px NunitoSans-Regular",
    },
  },

  panelSx: {
    "& .MuiBox-root.css-19kzrtu": {
      padding: "10px",
    },
  },

  speeddialSx: {
    position: "fixed",
    bottom: 16,
    right: 16,
    "& .MuiButtonBase-root": { backgroundColor: "#5078E1" },
  },
  tabSx: {
    "& .Mui-selected": {
      color: theme.palette.primary.light + " !important",
      font: "normal normal 600 12px/16px NunitoSans-Regular",
    },
    "& .MuiTab-root": {
      color: theme.palette.background.gray,
      font: "normal normal bold 14px/19px NunitoSans-Bold !important",
      textTransform: "capitalize !important",
      // border: "2px solid "+theme.palette.primary.light
    },
  },
  containerSx: {
    marginTop: "8px",
    height: "414px",
    overflow: "auto !important",
  },
  tablerowSx: {
    "& td p": {
      font: "normal normal 600 16px/16px NunitoSans-SemiBold",
    },
  },
  cardSx1: {
    [theme.breakpoints.between("xs", 'md')]: {
      width: "230px !important",
    },
  },
  cardSx2:{
    [theme.breakpoints.only("xs")]: {
      marginBottom:"40px",
    },
  },
  
paperSx:{
  display: { xs: "block",sm:'none',md:'none',lg:'none' },
  position: "fixed",
  zIndex:99
  // backgroundColor: " #333"

},
bottomSx:{
  backgroundColor:theme.palette.background.darkBg,

}
};
