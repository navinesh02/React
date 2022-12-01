import { color } from "@mui/system";
import { theme } from "../../theme";

export const CreatePropertyStyle = {
  propertyimgSx: {
    display: "flex",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "20px",
    backgroundColor: "#F2F4F7",
    width: "141px",
    height: "141px",
    borderRadius: "50%",
    boxShadow: "none",
  },
  uploadBtnSx: {
    "&.MuiButton-root": {
      color: "#071741",
      border: "1px solid #E4E8EE",
      textTransform: "capitalize",
      padding: "6px",
      display: "flex",
      margin: "auto",
      font:"normal normal 600 14px/19px NunitoSans-Bold "
    },
  },

  propertyCardSx: {
    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    minHeight: "270px",
  },
  labelSx: {
    marginBottom: "7px",
    marginTop: "8px",
  },
  boxSx: {
    borderRadius: "12px",
    border: "1px solid #E4E8EE",
    marginTop:"10px",
    // padding:"2px 8px",
    // padding:"12px",
    "& div": {
      border: "0 !important",
      margin: "0",
      // padding: "4px 8px",
    },
    "& .ql-header": {
      display: "none",
    },
    "& textarea": {
      border: "0 !important",
      outline: "0 !important",
      padding: "7px 0px",
      font: "normal normal 600 14px/19px NunitoSans-Bold !important",
      "&:hover": {
        border: "0 !important",
      },
    },
    "& .quill": {
      display: "flex",
      flexDirection: "column-reverse",
    },
    "& .ql-toolbar": {
      borderTop: "1px solid #E4E8EE !important",
    },
    "& .ql-toolbar.ql-snow, .ql-container.ql-snow": {
      font: "normal normal 500 16px/19px NunitoSans-Regular !important",
    },
  },
  cardSx: {
    borderRadius: "0",
    boxShadow: "0px 3px 3px #5C86CB2E",
    width: "100%",
  },
  cardSx1: {
    // borderRadius: "0",
    boxShadow: "0px 3px 3px #5C86CB2E",
    borderRadius: "8px",
    padding: "14px",

    width: "100%",
    margin: "13px 0px 6px 10px",
  },
  saveBtnSx: {
    padding: "10px",
    width: "250px",
  },
  saveSx:{
    backgroundColor:theme.palette.primary.light,
    font:"NunitoSans-Regular"

  },

  endCard: {
    display: "flex",
    justifyContent: "flex-end",
    // alignItems: "flex-end",
    rowGap:"10px"
  },
  contactCardSx: {
    margin: "18px 0px 0px 10px ",

    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    width: "100%",
  },
  toggleCheckSx:{
    "& .MuiButtonBase-root": {
      borderRadius: "25px!important",
      height: "30px",
      width: "30px",
      marginTop:"8px"
    },
    "& .MuiToggleButton-root.Mui-selected":{
      backgroundColor:"#5078E1",
      color:"#fff"
    }
  },
  labelSx: {
    font: "normal normal 600 11px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",
    // marginBottom: "7px",
    // marginTop: "8px",
  },
  toggleBtnSx:{
    "& .MuiButtonBase-root.MuiToggleButton-root": {
      borderRadius: "6px",
      border: "1px solid #E4E8EE",
      height: "38px",
      margin: "6px 4px 5px 5px",
      font: "normal normal 600 11px/16px NunitoSans-bold !important",
      color:"#333"

    },
    "& .MuiToggleButton-root.Mui-selected":{
      backgroundColor:"#5078E1",
      color:"#fff",
      font: "normal normal 600 11px/16px NunitoSans-bold !important",

    }
  }
 
};
