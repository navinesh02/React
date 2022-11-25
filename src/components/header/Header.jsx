import React from "react";
import { useStyles } from "./Styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { Headerstyle } from "./Styles";
import { Divider, Grid } from "@mui/material";

export default function Header() {
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
                    <img src="/images/DNTLogo.png" alt="logo" />
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
                      <img src="/images/bell-icon.svg" alt="DNTLogo" />
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
                        <img src="/images/profile2.png" alt="profile" />
                      </Avatar>
                      <Box sx={Header.profiletextSx}>
                        <Typography sx={Headerstyle.nametextSx}>
                          Bala Ganesh
                        </Typography>
                        <Typography sx={Headerstyle.superAdminSx}>
                          Super Admin
                        </Typography>
                      </Box>
                      <Box
                      // onClick= {od}
                      >
                        <img src="/images/arrrow.png" alt="arrow" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
