import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from "@mui/material/Paper";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../../components/cards";
import ChartCard from "../../components/chartCard/index";
import { DashboardStyle } from "./Styles";
import eye from "../../assets/images/eye.svg";
import pencil from "../../assets/images/pencil.svg";
import lead from "../../assets/images/Leads.svg";
import { rows, data, chartDetails, table } from "../../utils/constant";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Dashboard() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ padding: " 20px 20px" }}>
      <Grid container spacing={2}>
        {data?.map((_item) => {
          return (
            <Grid item xs={6} sm={3} lg={1.5} md={3} xl={2}>
              <StatCard {..._item} />
            </Grid>
          );
        })}
      </Grid>
      <Box marginTop={2}>
        <Grid container spacing={2}>
          {chartDetails.map((chart) => (
            <Grid key={chart.name} item xs={10} sm={12} md={12} lg={3}>
              <ChartCard details={chart} />
            </Grid>
          ))}
        </Grid>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <Item>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  padding: 0.5,
                  backgroundColor: "#F5F7FA",
                  height: "50px",
                  ...DashboardStyle.cardSx1,
                }}
              >
                <Grid container>
                  <Grid item xs={6} sm={6} lg={5} md={6}>
                    <Box>
                      <Typography variant="h6" component="h6">
                        General Request
                      </Typography>
                      <Typography variant="h6" component="h6">
                        12
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} lg={5} md={6}>
                    <Box
                      sx={{
                        borderRight: "1px solid #5C86CB2E",
                        // marginTop: "9px",
                        // marginBottom: "9px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6" component="h6">
                        Maintenance
                      </Typography>
                      <Typography variant="h6" component="h6">
                        15
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    sx={DashboardStyle.tabSx}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      fontWeight={"bold"}
                      label="General Request"
                      {...a11yProps(0)}
                    />
                    <Tab
                      fontWeight={"bold"}
                      label="Maintenance"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <Box sx={DashboardStyle.panelSx}>
                  <TabPanel value={value} index={0}>
                    <Grid
                      sx={{ marginTop: "0px", padding: "5px !important" }}
                      container
                      spacing={2}
                    >
                      <Grid item xs={8}>
                        <ListItem sx={{ padding: "5px" }}>
                          <Typography variant="h6" component="h5">
                            General Requests (12)
                          </Typography>
                        </ListItem>
                      </Grid>
                      <Grid item xs={4}>
                        <ListItem
                          sx={{ padding: "5px", justifyContent: "flex-end" }}
                        >
                          <Typography
                            variant="subTitel1"
                            component="h5"
                            color="primary.light"
                          >
                            View All
                          </Typography>
                        </ListItem>
                      </Grid>
                    </Grid>{" "}
                    <TextField
                      placeholder="Search Request ID, Request Name, Category"
                      fullWidth={"100%"}
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
                    <TableContainer
                      sx={{
                        height: "200px",
                        overflow: "auto !important",
                      }}
                    >
                      <Table sx={{ minWidth: 320 }} aria-label="simple table">
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              sx={{
                                " td, th": { border: 0, padding: "6px" },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                <Typography
                                  variant="h6"
                                  component="p"
                                  color="#091B29"
                                >
                                  {row.name}
                                </Typography>
                                <Typography
                                  color="#98A0AC"
                                  variant="body"
                                  component="p"
                                >
                                  {row.type} &#8226; {row.date} &#8226; {row.id}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ width: "40px" }}>
                                <img src={pencil} alt="pencil" />
                              </TableCell>
                              <TableCell sx={{ width: "40px" }}>
                                <img src={eye} alt="eyeimg" />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                </Box>

                <TabPanel value={value} index={1}>
                  Maintenance{" "}
                </TabPanel>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={6}>
            <Item
              sx={{
                overflowY: "hidden",
                height: "425px",
                ...DashboardStyle.cardSx2,
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                sx={{ marginBottom: "12px", color: "#333", fontWeight: "bold" }}
                justifyContent={"flex-start"}
                display={"flex"}
              >
                Occupancy By Property
              </Typography>
              <TableContainer sx={DashboardStyle.containerSx}>
                <Table sx={{ minWidth: 320 }} aria-label="simple table">
                  <TableHead sx={DashboardStyle.tableHeaderSx}>
                    <TableRow>
                      <TableCell>Property ID</TableCell>
                      <TableCell>Property Name</TableCell>
                      <TableCell>Total Unit</TableCell>
                      <TableCell>Occupied Unit</TableCell>
                      <TableCell>Occupancy %</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table.map((row) => (
                      <TableRow sx={DashboardStyle.tablerowSx}>
                        <TableCell scope="row">
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
                            {row.totelUnit}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1" component="p">
                            {row.occupeidUnit}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1" component="p">
                            {row.occupancy}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={DashboardStyle.speeddialSx}
            icon={<SpeedDialIcon />}
            onClick={() => navigate("/user/createproperty")}
          ></SpeedDial>
        </Box>
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          ...DashboardStyle.paperSx,
        }}
        elevation={3}
      >
        <BottomNavigation sx={DashboardStyle.bottomSx}>
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
            <img src={lead} alt="company" />
          </ListItemIcon>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
