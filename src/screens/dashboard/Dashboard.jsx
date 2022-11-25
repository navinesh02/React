import Header from "../../components/header/Header";
// import { useStyles } from "./Header-Styles";
import React from "react";
import StatCard from "../../components/cards";
import { Card, Divider, Grid, Typography } from "@mui/material";
import ChartCard from "../../components/chartCard/ChartCard";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import ListItem from "@mui/material/ListItem";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import Tab from "@mui/material/Tab";

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
                }}
              >
                <Box>
                  <Typography>General Request</Typography>
                  <Typography>15</Typography>
                </Box>
                <Box
                  sx={{
                    borderRight: "1px solid #5C86CB2E",
                    marginTop: "9px",
                    marginBottom: "9px",
                  }}
                />
                <Box>
                  <Typography>Maintenance</Typography>
                  <Typography>15</Typography>
                </Box>
              </Card>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="General Request" {...a11yProps(0)} />
                    <Tab label="Maintenance" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Grid sx={{ marginTop: "0px" }} container spacing={2}>
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
                  {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
                </TabPanel>

                <TabPanel value={value} index={1}>
                  Maintenance{" "}
                </TabPanel>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
