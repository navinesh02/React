import React from "react";
import createTheme from "@mui/material/styles";
import { useState } from "react";
import { loginstyle } from "./Style";
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
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const classes = useStyles();
  const navigate = useNavigate();
 
  return (
    <div className="root">
      <Box
        sx={loginstyle.containerSx}
      >
        <Grid container sx={{ marginTop: 0, paddingTop: 0 }}>
          <Grid
            item
            sx={{
              ...loginstyle.imageSectionSx,
              display: { xs: "none", md: "none", lg: "block" },
              paddingTop: 0,
            }}
            xs={0}
            sm={0}
            md={3}
          >
            <Box
              sx={loginstyle.circleImgGroupSx}
            >
              <img
                style={loginstyle.circleImgTopSx}
                src="images/circle.svg"
                alt="circleImgTop"
              />
              <img
                style={loginstyle.circleImgCenterSx}
                src="images/circleDark.svg"
                alt="circleImgCenter"
              />
              <img
                style={loginstyle.circleImgbottomSx}
                src="images/circle.svg"
                alt="circleImgbottom"
              />
            </Box>
            <img
              style={loginstyle.buldingImgbottomSx}
              src="images/bulding-crop.png"
              alt="buldingImgbottom"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            sx={{ ...loginstyle.formSectionSx, paddingTop: 0 }}
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
                sx={{ ...loginstyle.signInFormSx, marginTop: 0, paddingTop: 0 }}
              
              >
                <Box
                  sx={loginstyle.circleImgGroupSx}
                >
                  <img
                    style={{
                      ...loginstyle.dotedImgTopSx,
                      display: { xs: "none" },
                    }}
                    src="images/doted.svg"
                    alt="dotedImgTop"
                  />
                </Box>

                <Box
                  sx={loginstyle.signInCardSx}
                >
                  <Typography
                  
                    sx={{ ...loginstyle.signInSx, fontWeight: "bold" }}
                    variant="h6"
                  >
                    Sign In
                  </Typography>
                  <Box
                    sx={loginstyle.inputBarSx}
                  >
                    <TextField
                      sx={{ width: "100%" }}
                      type="text"
                      label="Mobile Number / Email ID"
                      placeholder="Enter Mobile Number / Email ID"
                    />
                  </Box>
                  <Box
                    sx={loginstyle.inputBarSx}
                  >
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      label="Enter Password"
                      placeholder="Enter your password"

                    />
                  </Box>
                  <Typography

                    sx={{
                      ...loginstyle.forgetPasswordSx,
                      mt: 2,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Did you forget your password? <span>Click Here</span>
                  </Typography>
                  <Box

                    sx={{ ...loginstyle.poweredBySx, mt: 0 }}
                  >
                    <span sx={{ fontSize: 10 }}>Powered by</span>
                    <img src="images/logo.png" alt="logo" /> Property Automate
                  </Box>
                  <Button

                    sx={{ ...loginstyle.loginBtn, Margintop: "20px" }}
                    fullWidth
                    variant="contained"
                    onClick={() => navigate("/user/dashboard")}
                  >
                    Log In
                  </Button>
                </Box>
                <Box

                  sx={loginstyle.circleImgGroupSx}
                >
                  <img
                    style={{
                      ...loginstyle.dotedImgBottomSx,
                      display: { xs: "none" },
                    }}
                    src="images/doted.svg"
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
