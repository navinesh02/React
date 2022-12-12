import { Avatar, Box, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RolesCard from "../rolesCard";
import { ProfileStyle } from "./style";

export default function ProfileDisplay() {
  const navigate = useNavigate();
  const rolesCardContent = [
    {
      image: "/images/lady.jpg",
      rolesText: "super Admin",
      color: "#F17360",
    },
    {
      image: "/images/lady.jpg",
      rolesText: "Comunity manager",
      color: "#119DA4",
    },
    {
      image: "/images/lady.jpg",
      rolesText: "Security manager",
      color: "#D49200",
    },
    {
      image: "/images/lady.jpg",
      rolesText: "Property manager",
      color: "#4991F2",
    },
    {
      image: "/images/lady.jpg",
      rolesText: "Zonal manager",
      color: "#11A442",
    },
    {
      image: "/images/lady.jpg",
      rolesText: "Customer Care",
      color: "#D471ff",
    },
  ];

  return (
    <Box sx={ProfileStyle.boxSx}>
      <Card sx={ProfileStyle.cardSx}>
        <Box display="flex" gap="8px">
          <Avatar
            sx={{ width: 70, height: 70 }}
            src={require("../../assets/images/profile2.png")}
          />
          <Box>
            <Typography sx={ProfileStyle.profileSx}> Narayanan </Typography>
            <Typography sx={ProfileStyle.profiletext1Sx}>
              narayanan@gmail.com
            </Typography>
            <Typography sx={ProfileStyle.adminSx}> Super Admin</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginTop: "16px" }} />
        <Typography
          mt={1}
          mb={1}
          sx={{
            font: "normal normal bold 12px/14px Nunito Sans",
            color: " #98A0AC",
          }}
        >
          Roles
        </Typography>
        <Box sx={ProfileStyle.Box1Sx}>
          {rolesCardContent.map((val, index) => (
            <RolesCard
              src={val.image}
              background={val.background}
              rolesText={val.rolesText}
              color={val.color}
            />
          ))}
        </Box>
        <Divider sx={{ marginTop: "16px", marginBottom: "12px" }} />
        <Box mt={1}>
          <Typography sx={ProfileStyle.textSx} mt={1}>
            My Profile
          </Typography>
          <Typography sx={ProfileStyle.textSx} mt={1}>
            Privacy Policy
          </Typography>
          <Typography sx={ProfileStyle.textSx} mt={1}>
            Terms and conditions
          </Typography>
          <Box mt={1}>
            <Button
              variant="outlined"
              sx={ProfileStyle.signSx}
              onClick={() => {
                navigate("/");
              }}
            >
              signOut
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
