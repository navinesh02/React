import { Divider, Grid, Menu } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import ProfileDisplay from "../profileDisplay";
import { Headerstyle } from "./Styles";
import bell from "../../assets/images/bell-icon.svg";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <>
      <Box sx={{ height: "64px" }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1C1C1C",
            height: "64px",
            position: "fixed",
            zIndex: 1,
          }}
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid container>
                  <Grid item>
                    <img
                      src={require("../../assets/images/DNTLogo.png")}
                      alt="logo"
                    />
                  </Grid>
                  <Divider
                    // sx={Headerstyle.dividerSx}

                    sx={{
                      ...Headerstyle.dividerSx,
                      display: {
                        xs: "none",
                        sm: "inherit",
                        md: "inherit",
                        lg: "inherit",
                      },
                    }}
                    orientation="vertical"
                    flexItem
                  ></Divider>
                  <Grid item>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        display: {
                          xs: "none",
                          sm: "inherit",
                          md: "inherit",
                          lg: "inherit",
                          font: "Nunito Sans !important",
                        },
                        flexGrow: 1,
                        fontSize: 12,
                      }}
                    >
                      PROPERTY MANAGEMENT SOLUTION
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Box sx={Headerstyle.bellimg}>
                      <img src={bell} alt="DNTLogo" />
                    </Box>
                  </Grid>
                  <Divider
                    sx={Headerstyle.dividerSx}
                    orientation="vertical"
                    flexItem
                  ></Divider>
                  <Grid item>
                    <Box sx={Headerstyle.profileContainer}>
                      <Avatar sx={Headerstyle.avatarSx}>
                        <img
                          src={require("../../assets/images/profile2.png")}
                          alt="profile"
                        />
                      </Avatar>
                      <Box sx={Header.profiletextSx}>
                        <Typography sx={Headerstyle.nametextSx}>
                          Bala Ganesh
                        </Typography>
                        <Typography sx={Headerstyle.superAdminSx}>
                          Super Admin
                        </Typography>
                      </Box>
                      <Box onClick={handleClick}>
                        <img
                          src={require("../../assets/images/arrrow.png")}
                          alt="arrow"
                        />

                        <Box>
                          {/* {onHoverContent === true && <ProfileDisplay />} */}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ padding: "0px !important" }}
      >
        <ProfileDisplay />
      </Menu>
    </>
  );
}
