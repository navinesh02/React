import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebarstyle } from "./Styles";
import lead from "../../assets/images/Leads.svg";
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
    if (open) {
      setOpenCollapse(false);
    }
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
    <Box>
      <Drawer
        variant="permanent"
        sx={{ marginRight: "25px", ...Sidebarstyle.rootSx }}
        open={open}
      >
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
                <img src={lead} alt="company" />
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
                  <img src={lead} alt="company" />
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
                  <img src={lead} alt="company" />
                </ListItemIcon>
                <ListItemText primary="Menu 2" sx={{ color: "#fff" }} />
                {open ? <ExpandMore /> : ""}
              </ListItemButton>
              <ListItemButton onClick={handleClickSubCollapse} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <img src={lead} alt="company" />
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
    </Box>
  );
}
