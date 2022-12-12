import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { cardstyle } from "./style";
import PropTypes from "prop-types";

export default function StatCard(props) {
  const { count = "", icon = "", dis = "" } = props;

  StatCard.propTypes = {
    count: PropTypes.number,
    icon: PropTypes.any.isRequired,
    dis: PropTypes.string,
  };

  return (
    <Card sx={cardstyle.cardSx}>
      <Grid container m={1}>
        <Grid item xs={6} lg={6} sm={6} md={6}>
          <Typography variant="h6"> {count}</Typography>
        </Grid>
        <Grid item xs={6} lg={6} sm={6} md={6}>
          <img
            src={require(`../../assets/images/card/${icon}`)}
            style={cardstyle.imgSx}
            alt="cardimg"
          />
        </Grid>
        <Grid item xs={12} lg={12} sm={12} md={12}>
          <Typography
            variant="h6"
            marginTop={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {dis}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
