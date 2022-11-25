import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { cardstyle } from "./style";

export default function StatCard(props) {
  const { count, icon, dis } = props;
  return (
    <Card sx={cardstyle.cardSx}>
      <Grid container m={1}>
        <Grid item xs={6}>
        <Typography variant="h6">  {count}</Typography> 
        </Grid>
        <Grid item xs={6} >
          <img src={icon} style= {cardstyle.imgSx} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" marginTop={2} justifyContent= { "center"}
          alignItems= {"center"}>{dis}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
