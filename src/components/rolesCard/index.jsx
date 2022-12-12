import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { RolesCardStyle } from "./style";
import PropTypes from "prop-types";

export default function RolesCard(props) {
  const { rolesText = "", color = "" } = props;
  RolesCard.propTypes = {
    rolesText: PropTypes.string,
    color: PropTypes.string,
  };

  return (
    <Box sx={RolesCardStyle.BoxSx}>
      <Box mt={1} sx={RolesCardStyle.Box2Sx}>
        <Avatar sx={{ backgroundColor: color + "2f", color: color }}>
          {rolesText[0]}
        </Avatar>
      </Box>
      <Typography sx={RolesCardStyle.textSx}>{rolesText}</Typography>
    </Box>
  );
}
