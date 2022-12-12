import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginstyle } from "./style";
import circle from "../../assets/images/circle.svg";
import circledark from "../../assets/images/circleDark.svg";
import doted from "../../assets/images/doted.svg";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });
  const handleChange = (key, value) => {
    const error = data?.error;
    error[key] = "";
    setData({ ...data, [key]: value, error });
  };
  const handlesubmit = () => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var isValid = true;
    const error = data?.error;
    if (data?.email.length === 0) {
      isValid = false;
      error.email = "Email Id is Required";
    }
    if (data?.email && regexEmail.test(data?.email) == false) {
      isValid = false;
      error.email = "Email Id is Required";
    }
    if (data?.password?.length === 0) {
      isValid = false;
      error.password = "Password is Required";
    }
    if (data?.email && regexEmail.test(data?.email) == true && data?.password) {
      navigate("/user/dashboard");
    }

    setData({ ...data, error });
    return isValid;
  };
  return (
    <div className="root">
      <Box sx={loginstyle.containerSx}>
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
            <Box sx={loginstyle.circleImgGroupSx}>
              <img
                style={loginstyle.circleImgTopSx}
                src={circle}
                alt="circleImgTop"
              />
              <img
                style={loginstyle.circleImgCenterSx}
                src={circledark}
                alt="circleImgCenter"
              />
              <img
                style={loginstyle.circleImgbottomSx}
                src={circle}
                alt="circleImgbottom"
              />
            </Box>
            <img
              style={loginstyle.buldingImgbottomSx}
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
                <Box sx={loginstyle.circleImgGroupSx}>
                  <img
                    style={{
                      ...loginstyle.dotedImgTopSx,
                      display: { xs: "none" },
                    }}
                    src={doted}
                    alt="dotedImgTop"
                  />
                </Box>

                <Box sx={loginstyle.signInCardSx}>
                  <Typography
                    sx={{ ...loginstyle.signInSx, fontWeight: "bold" }}
                    variant="h4"
                  >
                    Sign In
                  </Typography>
                  <Box sx={loginstyle.inputBarSx}>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Mobile Number / Email ID"
                      placeholder="Enter Mobile Number / Email ID"
                      helperText={data?.error?.email ? data?.error?.email : " "}
                      onChange={(e) => handleChange("email", e.target.value)}
                      type={"email"}
                      error={data?.error?.email ? true : false}
                    />
                  </Box>
                  <Box sx={loginstyle.inputBarSx}>
                    <TextField
                      sx={{ mt: 2, width: "100%" }}
                      label="Enter Password"
                      placeholder="Enter your password"
                      helperText={data?.error?.password ? data?.error?.password : " "}
                      onChange={(e) => handleChange("password", e.target.value)}
                      error={data?.error?.password ? true : false}
                      type={"password"}
                    />
                  </Box>
                  <Typography
                    sx={{
                      ...loginstyle.forgetPasswordSx,
                      mt: 1,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Did you forget your password? <span>Click Here</span>
                  </Typography>
                  <Box sx={{ ...loginstyle.BoxpoweredBySx, mt: 2 }}>
                    <span style={{ fontSize: "10px" }}>Powered by</span>
                    <img
                      src={require("../../assets/images/logo.png")}
                      alt="logo"
                    />{" "}
                    Property Automate
                  </Box>
                  <Button
                    sx={{ ...loginstyle.loginBtn, Margintop: "20px" }}
                    fullWidth
                    variant="contained"
                    onClick={() => handlesubmit()}
                  >
                    Log In
                  </Button>
                </Box>
                <Box sx={loginstyle.circleImgGroupSx}>
                  <img
                    style={{
                      ...loginstyle.dotedImgBottomSx,
                      display: { xs: "none" },
                    }}
                    src={doted}
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
