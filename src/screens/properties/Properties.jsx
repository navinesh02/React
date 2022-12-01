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
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";
import { PropertiesStyle } from "./Style";
import { useNavigate } from "react-router-dom";
// import Floors from 'public/images/card/floors.png'

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
        <Grid item>
          <Card sx={PropertiesStyle.cardSx}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  placeholder="Search Properties"
                  //   fullWidth={"100%"}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40,
                      borderRadius: 2,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <Box sx={{ justifyContent: "end", display: "flex" }}>
                  <img src="/images/filter.svg" alt={"fillter"} />
                </Box>
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
                  {table.map((row) => (
                    <TableRow sx={PropertiesStyle.tablerowsx}>
                      <TableCell scope="row"  
                      onClick={() => {
                        navigate("/user/viewproperty");
                      }}  >
                        <Typography variant="body1" component="p">
                          {row.propertyId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
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
                          id="fade-button"
                          aria-controls={open ? "fade-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <MoreVertIcon sx={{ color: "#98A0AC" }} />
                        </IconButton>
                        <Menu
                          sx={PropertiesStyle.paperSx}
                          id="fade-menu"
                          MenuListProps={{
                            "aria-labelledby": "fade-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          TransitionComponent={Fade}
                        >
                          <MenuItem onClick={handleClose}>Edit</MenuItem>
                          <MenuItem onClick={handleClose}>Inactive</MenuItem>
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
    </>
  );
}
