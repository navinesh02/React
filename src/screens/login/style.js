import { theme } from "../../utils/theme";

export const loginstyle = {
  containerSx: {
    height: "100vh",
  },
  signInCardSx: {
    padding: "32px 36px",
    width: "306px",
    height: "368px",
    borderRadius: "16px",
    border: 0,
    boxShadow: "0px 8px 24px #0000001F",
    margin: "0px 30px",
    zIndex: 10,
    backgroundColor: "#ffff",
  },

  signInFormSx: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    overflow: "hidden",
  },
  signInSx: {
    textAlign: "left",
    marginBottom: "32px",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
  },
  forgetPasswordSx: {
    textAlign: "right",
    fontFamily: "Nunito Sans !important",

    "& span": {
      color: "#5078E1",
    },
  },

  BoxpoweredBySx: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: "12px",
    font: "Nunito Sans",

    "& span": {
      fontSize: 10,
      color: "grey",
      font: "Nunito Sans",
    },
  },
  inputBarSx: {
    width: "100%",
    fontFamily: "Nunito Sans !important",
  },
  imageSectionSx: {
    backgroundColor: "white",
    height: "100vh",
    overflow: "hidden",
  },
  circleImgGroupSx: {
    height: "100vh",
    position: "relative",
  },
  circleImgTopSx: {
    position: "absolute",
    top: "-120px",
    right: "20px",
    width: "186px",
    height: "186px",
  },
  circleImgCenterSx: {
    position: "absolute",
    top: "85px",
    left: "40px",
    width: "465px",
    height: "465px",
  },
  circleImgbottomSx: {
    position: "absolute",
    bottom: "-19px",
    left: "-110px",
    width: "223px",
    height: "223px",
  },
  buldingImgbottomSx: {
    position: "absolute",
    bottom: "0px",
    left: "116px",
    width: "601px",
    height: "453px",
    // zIndex:'999',
  },
  formSectionSx: {
    backgroundColor: "#5078E1",
  },

  dotedImgTopSx: {
    position: "absolute",
    top: "38px",
    left: "-25px",
    width: "165px",
    height: "165px",
    zIndex: 0,
  },
  dotedImgBottomSx: {
    position: "absolute",
    bottom: "-66px",
    right: "40px",
    width: "165px",
    height: "165px",
    zIndex: 1,
  },
  loginBtn: {
    backgroundColor: theme.palette.primary.light,
    font: "Nunito Sans",

    "&:hover": { backgroundColor: "#5078E1" },
  },
};
