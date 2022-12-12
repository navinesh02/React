import { Card } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Chartstyle } from "./style";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

export default function ChartCard(props) {
  const { name = "", data = "", option = "", chartType = "" } = props.details;

  ChartCard.propTypes = {
    name: PropTypes.string,
    data: PropTypes.string,
    option: PropTypes.string,
    chartType: PropTypes.string,
  };
  return (
    <>
      <Card sx={Chartstyle.cardSx}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <ListItem sx={{ padding: "5px" }}>
              <Typography variant="h6" component="h6">
                {name}
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={2}>
            <ListItem sx={{ padding: "5px", justifyContent: "flex-end" }}>
              <img
                style={Chartstyle.cardImgSx}
                src={require("../../assets/images/doubleArrow.png")}
                alt={"arrow"}
              />
            </ListItem>
          </Grid>
        </Grid>
        <Chart
          chartType={chartType}
          data={data}
          options={option}
          width={"100%"}
          height={"300px"}
        />
      </Card>
    </>
  );
}
