import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  ListItem,
  Divider,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";
import { PropertiesStyle } from "./Style";
import { useNavigate } from "react-router-dom";
// import Floors from 'public/images/card/floors.png'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from "@mui/material/Paper";
import InputText from "../../components/input/InputText";

export default function Properties() {
  const table = [
    createTd(
      "Prop 011",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 013",
      "Phonix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 014",
      "Thapar",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 015",
      "Marian",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 016",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 017",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 019",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Inactive"
    ),
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  function createTd(
    propertyId,
    propertyName,
    companyName,
    location,
    revenueType,
    propertyType,
    status
  ) {
    return {
      propertyId,
      propertyName,
      companyName,
      location,
      revenueType,
      propertyType,
      status,
    };
  }

  return (
    <>
      <Card>
        <Stack direction="row">
          <Typography component="h1" variant="h6" margin={"10px 0 7px 10px"}>
            Properties
          </Typography>
        </Stack>
      </Card>
      <Grid container>
        <Grid item xs={10} sm={11} md={12} lg={12}>
          <Card sx={PropertiesStyle.cardSx}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <ListItem sx={{ padding: "5px", width:"190px", ...PropertiesStyle.textSx}}>
                  <InputText
                    type="text"
                    placeholder={"Search Properties"}
                    startAdornment={<SearchIcon sx={{ color: "#98A0AC" }} />}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={2}>
                <ListItem sx={{ padding: "5px", justifyContent: "flex-end" }}>
                 
                <img src="/images/filter.svg" alt={"fillter"} />
                </ListItem>
              </Grid>
            </Grid>
            <TableContainer sx={PropertiesStyle.tableContainerSx}>
              <Table sx={{ minWidth: 320 }} aria-label="table">
                <TableHead sx={PropertiesStyle.tableHeaderSx}>
                  <TableRow>
                    <TableCell>Property ID</TableCell>
                    <TableCell>Property Name</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Revenue Type</TableCell>
                    <TableCell>Property Type</TableCell>
                    <TableCell>Status</TableCell> <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.map((row, index) => (
                    <TableRow sx={PropertiesStyle.tableRowSx} key={index}>
                      <TableCell scope="row"
                        onClick={() => {
                          navigate("/user/viewproperty");
                        }}>
                        <Typography
                          variant="body1"
                          component="p"
                        >
                          {row.propertyId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          component="p"
                         
                        >
                          {row.propertyName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.companyName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.location}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.revenueType}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{
                            backgroundColor: "#78B1FE",
                            padding: "5px",
                            borderRadius: "4px",
                            color: "#fff",
                          }}
                        >
                          {row.propertyType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{
                            color:
                              row.status === "Active" ? "#5AC782" : "#FF4B4B",
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon sx={{ color: "#98A0AC" }} />
                        </IconButton>
                        <Menu
                          sx={PropertiesStyle.menuItemSx}
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: "140px",
                              width: "92px",
                            },
                          }}
                        >
                          <MenuItem onClick={handleClose}>Edit</MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>Inactive</MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>Active</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          ...PropertiesStyle.paperSx,
        }}
        elevation={3}
      >
        <BottomNavigation sx={PropertiesStyle.bottomSx}>
          <BottomNavigationAction
            sx={{
              color: "#fff",
              backgroundColor: "#5078E1",
              height: "39px",
              borderRadius: "23px",
              marginTop: "7px",
              maxWidth: "37px",
              minWidth: "10px",
              marginRight: "34px",
              justifyContent: "center",
            }}
            label="Recents"
            icon={<DashboardIcon />}
            onClick={() => {
              navigate("/user/dashboard");
            }}
          />
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
          <ListItemIcon
            sx={{
              color: "#fff",
              height: "39px",
              borderRadius: "23px",
              marginTop: "7px",
              maxWidth: "37px",
              minWidth: "10px",
              justifyContent: "center",
            }}
            onClick={() => {
              navigate("/user/createproperty");
            }}
          >
            <img src="/images/Leads.svg" alt="company" />
          </ListItemIcon>
        </BottomNavigation>
      </Paper>
    </>
  );
}
