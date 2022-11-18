import React from "react";
import createTheme from "@mui/material/styles";
import dotedImg from "../../assets/images/doted.svg";
import circleImg from "../../assets/images/circle.svg";
import circleDarkImg from "../../assets/images/circleDark.svg";
// import { useStyles } from "./login-styles";
import { loginstyle } from "./style"
import {
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const Login = () => {
  // const classes = useStyles();

  return (
    <div className="root">
      <Box 
      sx = {loginstyle.containerSx}
      // className={classes.container} 
      >
        <Grid container sx={{ marginTop: 0, paddingTop: 0 }}>
          <Grid
            item
            sx={{...loginstyle.imageSectionSx,
              display: { xs: "none", md: "none", lg: "block" },
              paddingTop: 0,
            }}
            xs={0}
            sm={0}
            md={3}
            // className={classes.imageSection}
          >
            <Box 
            // className={classes.circleImgGroup}
            sx = {loginstyle.circleImgGroupSx}
            >
              <img
                // className={classes.circleImgTop}
                style = {loginstyle.circleImgTopSx}

                src={circleImg}
                alt="circleImgTop"
              />
              <img
                // className={classes.circleImgCenter}
                style = {loginstyle.circleImgCenterSx}

                src={circleDarkImg}
                alt="circleImgCenter"
              />
              <img
                // className={classes.circleImgbottom}
                style = {loginstyle.circleImgbottomSx}

                src={circleImg}
                alt="circleImgbottom"
              />
            </Box>
            <img
              // className={classes.buldingImgbottom}
              style={ loginstyle.buldingImgbottomSx}
              src={require("../../assets/images/bulding-crop.png")}
              alt="buldingImgbottom"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            // className={classes.formSection}
            // sx = { loginstyle.formSectionSx}
            sx={{...loginstyle.formSectionSx, paddingTop: 0 }}
          >
            <Grid sx={{ marginTop: 0, paddingTop: 0 }}>
              <Grid
                item
                xs={0}
                sm={0}
                md={4}
                lg={4}
                sx={{ marginTop: 0, paddingTop: 0 }}
              ></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={11}
                sx={{...loginstyle.signInFormSx, marginTop: 0, paddingTop: 0 }}
                // className={classes.signInForm}
                // sx = { loginstyle.signInFormSx}
              >
                <Box 
                // className={classes.circleImgGroup}
                sx = { loginstyle.circleImgGroupSx}
                >
                  <img
                    // className={classes.dotedImgTop}
                    style = {{...loginstyle.dotedImgTopSx, display: {xs:"none"}}}
                    src={dotedImg}
                    alt="dotedImgTop"
                  />
                </Box>

                <Box
                //  className={classes.signInCard}
                sx = { loginstyle.signInCardSx}
                 >
                  <Typography
                    // className={classes.signIn}
                    // sx = { loginstyle.signInSx}
                    sx={{...loginstyle.signInSx, fontWeight: "bold" }}
                    variant="h6"
                  >
                    Sign In
                  </Typography>
                  <Box 
                  // className={classes.inputBar}
                  sx = { loginstyle.inputBarSx}
                  >
                    <TextField
                      sx={{ width: "100%" }}
                      type="text"
                      label="Mobile Number / Email ID"
                      placeholder="Enter Mobile Number / Email ID"
                    />
                  </Box>
                  <Box 
                  // className={classes.inputBar}
                  sx = { loginstyle.inputBarSx}
                  >
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      label="Enter Password"
                      placeholder="Enter your password"
                    />
                  </Box>
                  <Typography
                    // className={classes.forgetPassword}
                    // sx = { loginstyle.forgetPasswordSx}
                    sx={{...loginstyle.forgetPasswordSx, mt: 2, fontSize: 12, fontWeight: "bold" }}
                  >
                    Did you forget your password? <span>Click Here</span>
                  </Typography>
                  <Box 
                  // className={classes.poweredBy}
                  // sx = { loginstyle.poweredBySx}
                   sx={{...loginstyle.poweredBySx, mt: 0 }}>
                    <span sx={{ fontSize: 10 }}>Powered by</span>
                    <img
                      src={require("../../assets/images/logo.png")}
                      alt="logo"
                    />{" "}
                    Property Automate
                  </Box>
                  <Button
                    // onClick={onLoginBtn}
                    // className={classes.loginBtn}
                    
                    sx={{...loginstyle.loginBtn, Margintop: "20px" }}
                    fullWidth
                    variant="contained"
                  >
                    Log In
                  </Button>
                </Box>
                <Box 
                // className={classes.circleImgGroup}
                sx = { loginstyle.circleImgGroupSx}
                >
                  <img
                  style = {{...loginstyle.dotedImgBottomSx, display: {xs:"none"}}}
                    // className={classes.dotedImgBottom}
                    src={dotedImg}
                    alt="dotedImgBottom"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Login;
