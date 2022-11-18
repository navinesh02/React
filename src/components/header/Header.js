import React from "react";
import { useStyles } from "./Header-styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#1C1C1C" }}>
          <Toolbar>
            <img
              className={classes.logImg}
              src={require("../../assets/images/DNTLogo.png")}
              alt="DNTLogo"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: 10 }}
            >
              PROPERTY MANAGEMENT SOLUTION
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
