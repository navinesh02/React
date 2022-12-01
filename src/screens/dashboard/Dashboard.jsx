import React from "react";
import StatCard from "../../components/cards";
import {
  Card,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChartCard from "../../components/chartCard/ChartCard";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { DashboardStyle } from "./Styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

// import SearchIcon from "@material-ui/icons/Search";

import Tab from "@mui/material/Tab";

const rows = [
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
];

const table = [
  createTd("Prop 011", "Tyons", "22", "02", "47%"),
  createTd("Prop 012", "Rubix", "52", "14", "27%"),
  createTd("Prop 013", "Phonix", "46", "34", "54%"),
  createTd("Prop 014", "Thapar", "27", "76", "65%"),
  createTd("Prop 015", "Marian", "29", "33", "23%"),
  createTd("Prop 016", "Tyons", "43", "34", "34%"),
  createTd("Prop 017", "Tyons", "87", "56", "21%"),
  createTd("Prop 011", "Tyons", "22", "02", "47%"),
  createTd("Prop 012", "Rubix", "52", "14", "27%"),
  createTd("Prop 013", "Phonix", "46", "34", "54%"),
];

function createTd(
  propertyId,
  propertyName,
  totelUnit,
  occupeidUnit,
  occupancy
) {
  return { propertyId, propertyName, totelUnit, occupeidUnit, occupancy };
}
function createData(name, type, date, id) {
  return { name, type, date, id };
}
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

export const chartDetails = [
  {
    name: "Property Types",
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#58D0E0", "#FF9340", "#5AC782", "#F3E137"],
    },
  },
  {
    name: "Unit Category",
    chartType: "Bar",
    data: [
      ["Task", " "],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      colors: ["#5AC782"],
      legend: "bottom",
    },
  },
  {
    name: "Vacant Unit By Property",
    chartType: "BarChart",
    data: [
      ["Task", "No of Vacants"],
      ["Rubix", 10],
      ["Eat", 22],
      ["Commute", 32],
      ["Watch TV", 21],
      ["Sleep", 7],
    ],
    option: {
      colors: ["#58D0E0"],
      legend: "bottom",
    },
  },
  {
    name: "Total Area",
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Commerical", 20],
      ["Residential", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#5AC782", "#F3E137"],

      pieHole: 0.4,
      is3D: false,
    },
  },
];
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
  const data = [
    {
      count: 14,
      icon: "/images/card/activeProperty.png",
      dis: "Active Properties",
    },
    {
      count: "06",
      icon: "/images/card/block.png",
      dis: "Blocks",
    },
    {
      count: 12,
      icon: "/images/card/floors.png",
      dis: "Floors",
    },
    {
      count: 14,
      icon: "/images/card/residents.png",
      dis: "Residents",
    },
    {
      count: 10,
      icon: "/images/card/actiiveUnit.png",
      dis: "Active unit",
    },
    {
      count: "03",
      icon: "/images/card/vacant.png",
      dis: "Vaccant",
    },
    {
      count: 17,
      icon: "/images/card/reserved.png",
      dis: "Reserved",
    },
    {
      count: 45,
      icon: "/images/card/occupied.png",
      dis: "Occupied",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {data?.map((_item) => {
          return (
            <Grid item xs={6} sm={6} lg={1.5} md={4}>
              <StatCard {..._item} />
            </Grid>
          );
        })}
      </Grid>
      <Box marginTop={2}>
        <Grid container spacing={2}>
          {chartDetails.map((chart) => (
            <Grid key={chart.name} item xs={10} md={6} lg={3}>
              <ChartCard details={chart} />
            </Grid>
          ))}
        </Grid>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  padding: 2,
                  backgroundColor: "#F5F7FA",
                  height: "30px",
                }}
              >
                <Box>
                  <Typography variant="h6" component="h6">
                    General Request
                  </Typography>
                  <Typography variant="h6" component="h6">
                    12
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderRight: "1px solid #5C86CB2E",
                    marginTop: "9px",
                    marginBottom: "9px",
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
                      placeholder="Search Request ID, Request Name, Categoty"
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
                                <img src="/images/pencil.svg" alt="pencil" />
                              </TableCell>
                              <TableCell sx={{ width: "40px" }}>
                                <img src="/images/eye.svg" alt="pencil" />
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
          <Grid item xs={6}>
            <Item sx={{ overflowY: "hidden", height: "430px" }}>
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
    </div>
  );
}
