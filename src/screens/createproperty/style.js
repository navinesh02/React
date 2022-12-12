import { theme } from "../../utils/theme";

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
      font: " Nunito Sans ",
      fontSize: "13px",
      fontWeight: "bold",
    },
  },

  propertyCardSx: {
    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    minHeight: "270px",
    font: "Nunito Sans !important",
  },
  
  boxSx: {
    borderRadius: "12px",
    border: "1px solid #E4E8EE",
    marginTop: "10px",
   
    "& div": {
      border: "0 !important",
      margin: "0",
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
    boxShadow: "0px 3px 3px #5C86CB2E",
    borderRadius: "8px",
    padding: "14px",

    width: "100%",
    margin: "13px 0px 6px 10px",
  },
  saveBtnSx: {
    padding: "10px",
    width: "250px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  saveSx: {
    backgroundColor: theme.palette.primary.light,
    font: "Nunito Sans",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "#5078E1" },
  },

  endCard: {
    display: "flex",
    justifyContent: "flex-end",
    rowGap: "10px",
  },
  contactCardSx: {
    margin: "18px 0px 0px 10px ",

    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    width: "100%",
  },
  toggleCheckSx: {
    "& .MuiButtonBase-root": {
      borderRadius: "25px!important",
      height: "30px",
      width: "30px",
      marginTop: "8px",
    },
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "#5078E1",
      color: "#fff",
    },
  },
  labelSx: {
    font: "Nunito Sans !important",
    fontSize: "12px",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",

  },
  toggleBtnSx: {
    "& .MuiButtonBase-root.MuiToggleButton-root": {
      borderRadius: "6px",
      border: "1px solid #E4E8EE",
      height: "38px",
      margin: "6px 4px 5px 5px",
      font: "Nunito Sans !important",
      fontSize: "13px !important",
      fontWeight: "bold",
      color: "#333",
    },

    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "#5078E1",
      color: "#fff",
      fontWeight: "bold",
      font: "Nunito Sans !important",
      "&:hover": { backgroundColor: "#5078E1" },
    },
  },
  boxSx1: {
    display: { xs: "none", sm: "none", md: "none", lg: "none" },
  },
};
