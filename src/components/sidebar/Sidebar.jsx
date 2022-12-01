import Header from "../header/Header";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Sidebarstyle } from "./Styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react";

const drawerWidth = 240;
const marginTop = 64;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: marginTop,
  backgroundColor: "#333",

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  marginTop: marginTop,
  backgroundColor: "#333",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  // const classes = useStyles();
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  // openSubCollapse
  const [openSubCollapse, setopenSubCollapse] = useState(false);

  const handleClickSubCollapse = () => {
    setopenSubCollapse(!openSubCollapse);
  };

  return (
   
      <Drawer variant="permanent" sx={{ marginRight: "25px" }} open={open}>
        <DrawerHeader>
          <Typography color="#fff" sx={{ marginRight: "20px" }} component="h6">
            Property Manager For <br />
            Start up
          </Typography>

          <IconButton
            sx={{
              bgcolor: "#5078E1",
              color: "#fff",
              "&:hover": { bgcolor: "#5078E1" },
            }}
            onClick={handleDrawer}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            onClick={() => {
              navigate("/user/dashboard");
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  padding: "7px",
                  borderRadius: "50%",
                  color: "#fff",
                  bgcolor: theme.palette.primary.light,
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Inbox2"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={
                open
                  ? handleClickCollapse
                  : () => {
                      navigate("/user/createproperty");
                    }
              }
              sx={{
                minHeight: 48,
                color: "#fff",
                justifyContent: open ? "initial" : "center",
                px: 2.0,
              }}
            >
              <ListItemIcon
                sx={{
                  padding: "7px",
                  borderRadius: "50%",
                  color: "#fff",
                  bgcolor: theme.palette.primary.light,
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src="/images/Leads.svg" alt="company" />
              </ListItemIcon>
              <ListItemText
                primary={"Companies"}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open ? openCollapse ? <ExpandLess /> : <ExpandMore /> : ""}
            </ListItemButton>
          </ListItem>

          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <img src="/images/Leads.svg" alt="company" />
                </ListItemIcon>
                <ListItemText
                  onClick={() => {
                    navigate("/user/createproperty");
                  }}
                  primary="Menu 2"
                  sx={{ color: "#fff" }}
                />
                {open ? <ExpandMore /> : ""}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <img src="/images/Leads.svg" alt="company" />
                </ListItemIcon>
                <ListItemText primary="Menu 2" sx={{ color: "#fff" }} />
                {open ? <ExpandMore /> : ""}
              </ListItemButton>
              <ListItemButton onClick={handleClickSubCollapse} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <img src="/images/Leads.svg" alt="company" />
                </ListItemIcon>
                <ListItemText primary="Menu 3" sx={{ color: "#fff" }} />
                {open ? openSubCollapse ? <ExpandLess /> : <ExpandMore /> : ""}
              </ListItemButton>
              <Collapse in={openSubCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Menu 3.1" sx={{ color: "#fff" }} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Menu 3.2" sx={{ color: "#fff" }} />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </List>
      </Drawer>
    
  
  );
}
