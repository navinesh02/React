import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
   height: "100vh"
  },
  signInCard: {
    padding: "32px 36px",
    width: "306px",
    height: "368px",
    borderRadius: "16px",
    border: 0,
    boxShadow: "0px 8px 24px #0000001F",
    margin: "0px 30px",
    zIndex: 10,
    backgroundColor: "#ffff"
  },
  inputBar: {
    marginTop: 30,
    
  },

signInForm: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    overflow: "hidden",
    // backgroundImage: `url("/images/loginBackGroundImage.png")`,

},
  signIn: {
    textAlign: "left",
    marginBottom: "32px",
    fontFamily: "NunitoSans-ExtraBold ! important",

  },
  forgetPassword  :{
    textAlign: "right",
    fontFamily: "NunitoSans-Regular !important",
    
    "& span":{
        color: "#5078E1",
      }
  },
  
  poweredBy:{
    textAlign: "center",
    fontSize: 12,
    // color: theme.palette.secondary.light,
    marginTop:"30px",
    marginBottom:"37px",
    font: "normal normal 600 12px/16px NunitoSans-Regular ",
    
    "& span":{  
      fontSize: 10,
      color: "grey",
      font: "normal normal 500 10px/14px NunitoSans-Regular",
    
    },
  },
    inputBar : {
        width: "100%",
    },
    imageSection: {
      backgroundColor: "white",
      height: "100vh",
      overflow: "hidden",
    },
    circleImgGroup: {
      height: "100vh",
      position: "relative",
    },
    circleImgTop: {
      position: "absolute",
      top: "-120px",
      right: "20px",
      width: "186px",
      height: "186px",
    },
    circleImgCenter: {
      position: "absolute",
      top: "85px",
      left: "40px",
      width: "465px",
      height: "465px",
    },
    circleImgbottom: {
      position: "absolute",
      bottom: "-19px",
      left: "-110px",
      width: "223px",
      height: "223px",
    },
    buldingImgbottom: {
      position: "absolute",
      bottom: "0px",
      left: "116px",
      width: "601px",
      height: "453px",
      // zIndex:'999',
    },
    formSection: {
      backgroundColor: "#5078E1",
    },
    
  dotedImgTop: {
    position: "absolute",
    top: "38px",
    left: "-25px",
    width: "165px",
    height: "165px",
    zIndex: 0,
  },
  dotedImgBottom: {
    position: "absolute",
    bottom: "-66px",
    // [theme.breakpoints.up("md")]: {
    //   right: "-60px",
    // },
    right: "40px",
    width: "165px",
    height: "165px",
    zIndex: 1,
  },
    


}));

export { useStyles };
