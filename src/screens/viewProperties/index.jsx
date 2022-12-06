import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Typography,
  Card,
  Stack,
  IconButton,
  Grid,
  Box,
  Avatar,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ViewPropertystyle } from "./style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ViewProperties() {
  const navigate = useNavigate();
  const propertyDetails = [
    {
      label: "Company Name",
      value: "Name",
    },
    {
      label: "Property Name",
      value: "Rubix Appartment",
    },
    {
      label: "Property Type",
      value: "Property Type",
    },
    {
      label: "Property Purpose",
      value: "Residential",
    },
    {
      label: "Payment Period",
      value: "Monthly",
    },
    {
      label: "Status",
      value: "Active",
    },
  ];

  const propertyDetails2 = [
    {
      label: "Revanue Type",
      value: "Lease",
    },
    {
      label: "Carpet Area",
      value: "10000",
      type: " Sq.ft",
    },
    {
      label: "Total Area",
      value: "1610000",
      type: " Sq.ft",
    },
    {
      label: "Year Built",
      value: "22-10-22",
    },
    {
      label: "Handover Date",
      value: "22-10-22",
    },
    {
      label: "Publicm Listing",
      value: "Public",
    },
    {
      label: "Pet Allowed",
      value: "Public",
    },
  ];
  return (
    <>
      <Card>
        <Stack direction="row">
          <IconButton
            sx={{
              bgcolor: "#E4E8EE",
              color: "#091B29",
              width: "40px",
              height: "40px",
              "&:hover": { bgcolor: "#E4E8EE" },
            }}
            onClick={() => navigate("/user/createproperty")}
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>{" "}
          <Typography component="h1" variant="h6" margin={"10px 0 7px 10px"}>
            Rubix Appartment{" "}
          </Typography>
        </Stack>
      </Card>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Card sx={ViewPropertystyle.mainCardSx}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
              >
                <Grid item xs={12} sm={12} md={12} lg={2}>
                  <Avatar
                    alt="RubixAppartment"
                    sx={{ width: 140, height: 140 }}
                    src="/images/RubixAppartment.png"
                  />
                  <Box sx={ViewPropertystyle.positionRelativeSx}>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={ViewPropertystyle.idSx}
                      color="#ffff"
                    >
                      ID-PGUR794
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={10} sm={12} md={12} lg={10}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      color: "#4E5A6B",
                      marginBottom: "5px",
                    }}
                  >
                    PROPERTY DETAILS
                  </Typography>
                  <Grid container spacing={2}>
                    {propertyDetails.map((property, index) => (
                      <Grid key={index} item sm={12} md={4} lg={2}>
                        <InputLabel
                          // className={classes.label}
                          variant="standard"
                          htmlFor="Property-Description"
                        >
                          {property.label}
                        </InputLabel>
                        <Typography component="h6" variant="h6">
                          {property.value}
                        </Typography>
                      </Grid>
                    ))}
                    <Grid item sm={12} md={12} lg={12}>
                      <InputLabel
                        //   className={classes.label}
                        variant="standard"
                        htmlFor="Property-Description"
                      >
                        {"Property Description"}
                      </InputLabel>
                      <Typography variant="h6" component="h6">
                        {
                          "A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, a street bike available at a starting price of Rs. 1,62,916 in India. It is available in 3 variants and 8 colours with top variant price starting from The Yamaha"
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
            <Card sx={ViewPropertystyle.card2Sx}>
              <Grid container spacing={2} justifyContent="space-between">
                {propertyDetails2.map((property, index) => (
                  <Grid key={index} item sm={12} md={4} lg={"auto"}>
                    <Box>
                      <InputLabel variant="standard">
                        {property.label}
                      </InputLabel>
                      <Typography component="h6" variant="h6">
                        {property.value}
                        {property?.type}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
            <Card sx={ViewPropertystyle.Card3Sx}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10} sm={12} md={12} lg={4}>
                  <iframe
                    style={{
                      maxHeight: "195px",
                      maxWidth: "480px",
                      borderRadius: "10px",
                      border: "10px",
                      marginTop: "10px",
                    }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7776.581393115465!2d80.26024112205799!3d12.953241240010954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669697518359!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Grid>
                <Grid item xs={10} sm={12} md={12} lg={3}>
                  <Card sx={ViewPropertystyle.borderCardSX}>
                    <Typography
                      component="h6"
                      variant="body1"
                      sx={{
                        font: "normal normal bold 14px/16px NunitoSans-Bold",
                      }}
                    >
                      <LocationOnIcon fontSize="small" />
                      ADDRESS
                    </Typography>
                    <Typography
                      component="h6"
                      sx={{ fontWeight: "bold", margin: "9px 0 17px 0" }}
                    >
                      23 Main Street, 3rd Cross street, 3rd Sector, Chennai,
                      Tamilnadu, India -60001
                    </Typography>
                    <Typography component="h6">
                      <span>Latitude :</span> 27.2046° N
                    </Typography>
                    <Typography component="h6">
                      <span>Longitude :</span> 77.4977° E
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={10} sm={12} md={12} lg={5}>
                  <Card sx={ViewPropertystyle.infoCardSx}>
                    <Typography
                      component="h6"
                      sx={{
                        font: "normal normal bold 14px/16px NunitoSans-Bold",
                        margin: "1px 0 17px 0",
                      }}
                    >
                      <PhoneIcon fontSize="small" />
                      CONTACT & OTHER INFORMATION
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={6}>
                        <InputLabel
                          variant="standard"
                          htmlFor="Property-Description"
                        >
                          Business Phone :
                        </InputLabel>
                        <Typography variant="h6">044 23224944</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={6}>
                        <InputLabel
                          variant="standard"
                          htmlFor="Property-Description"
                        >
                          Mobile Phone :
                        </InputLabel>
                        <Typography component="h6" variant="h6">
                          044 23224944
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={6}>
                        <InputLabel
                          variant="standard"
                          htmlFor="Property-Description"
                        >
                          Website :
                        </InputLabel>
                        <Typography component="h6" variant="h6">
                          propertyautomate.com
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={6}>
                        <InputLabel
                          variant="standard"
                          htmlFor="Property-Description"
                        >
                          Email Address :
                        </InputLabel>
                        <Typography component="h6" variant="h6">
                          mail@property.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
