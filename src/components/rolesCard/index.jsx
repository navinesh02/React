import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { RolesCardStyle } from "./style";

export default function RolesCard(props) {
  const { src = {}, rolesText = "" , color=""} = props;

  return (
    <Box sx={RolesCardStyle.BoxSx}>
      <Box  mt={1} sx={RolesCardStyle.Box2Sx}>
        <Avatar sx={{backgroundColor: color+"2f",color:color}} >{rolesText[0]}</Avatar>
      </Box>
      <Typography sx={RolesCardStyle.textSx}>{rolesText}</Typography>
    </Box>
  );
}
