import Header from "../../components/header/Header";
// import { useStyles } from "./Header-Styles";
import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {
  // const classes = useStyles();

  return (
    <div>
      <div>
        <Header />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* <Sidebar /> */}
        </Grid>
        <Grid item xs={9}>
          {/* xs=8 */}
        </Grid>
      </Grid>
    </div>
  );
}
