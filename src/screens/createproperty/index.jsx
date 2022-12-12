import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputLabel,
  ListItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import BasicAlerts from "../../components/alert/index";
import CustomSelect from "../../components/customSelect";
import InputText from "../../components/input/index";
import Sidebar from "../../components/sidebar";
import { CreatePropertyStyle } from "./style";
import { selectList } from "../../utils/constant";

export default function CreateProperty() {
  const [value, setValue] = useState(
    "A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, a street bike available at a starting price of Rs. 1,62,916 in India. It is available in 3 variants and 8 colours with top variant price starting from The Yamaha"
  );
  const [selected, setSelected] = React.useState(false);

  const navigate = useNavigate();
  const [publicList, setpublicList] = useState("public");

  const handlePublicList = (event, newPublicList) => {
    console.log(newPublicList);
    setpublicList(newPublicList);
  };
  const [open, setOpen] = React.useState(false);

  const saveProperty = (value) => {
    setOpen(value);
    setTimeout(() => {
      setOpen(false);
      navigate("/user/property");
    }, 5000);
  };

  return (
    <Box>
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
            onClick={() => navigate("/user/dashboard")}
          >
            <ChevronLeftIcon />
          </IconButton>{" "}
          <Typography component="h1" variant="h6" margin={"10px 0 7px 10px"}>
            Create New Property
          </Typography>
        </Stack>
      </Card>
      <Box p={2}>
        <Grid spacing={2} container mt={2}>
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={CreatePropertyStyle.propertyCardSx}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "13px", color: "#4E5A6B", mt: "5px" }}
                align="center"
              >
                PROPERTY IMAGE
              </Typography>
              <Card sx={CreatePropertyStyle.propertyimgSx}>
                <img
                  src={require("../../assets/images/propertyimg.png")}
                  alt="propimg"
                />
              </Card>
              <Button sx={CreatePropertyStyle.uploadBtnSx}>Upload Image</Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Card sx={CreatePropertyStyle.propertyCardSx}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "13px", color: "#4E5A6B" }}
              >
                PROPERTY DETAILS
              </Typography>
              <Grid
                spacing={2}
                container
                marginTop={"1px"}
                marginBottom={"12px"}
              >
                {/* <InputText /> */}
                {selectList.map((select, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3}>
                    <CustomSelect
                      label={select.label}
                      options={select.options}
                      defaultValue={select.defaultValue}
                    />
                  </Grid>
                ))}
              </Grid>
              <InputLabel sx={CreatePropertyStyle.labelSx} variant="standard">
                {"Property Description"}
              </InputLabel>
              <Box sx={CreatePropertyStyle.boxSx}>
                <ReactQuill value={value} theme="snow" onChange={setValue} />
              </Box>
            </Card>
          </Grid>
          <Card mt={3} sx={CreatePropertyStyle.cardSx1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <InputText
                  label="Property Type"
                  type="text"
                  defaultValue="Apartment"
                  placeholder="Enter Property Type"
                  disabled={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <CustomSelect
                  label={"Property Purpose"}
                  defaultValue={"Residential"}
                  options={[
                    { key: "Residential", value: "Residential" },
                    { key: "Commerical", value: "Commerical" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <CustomSelect
                  label={"Revenue Type"}
                  defaultValue={"Revenue Type"}
                  options={[
                    { key: "Revenue Type", value: "Revenue Type" },
                    { key: "YES", value: "YES" },
                    { key: "NO", value: "NO" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <CustomSelect
                  label={"Measurement Unit"}
                  defaultValue={"Sq. Ft"}
                  options={[
                    { key: "Sq. Ft", value: "Sq. Ft" },
                    { key: "Ft", value: "Ft" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <InputText
                  label="Carpet Area"
                  type="number"
                  defaultValue="1000"
                  placeholder="Enter Carpet Area"
                  endAdornment={
                    <Typography
                      component="h6"
                      variant="body1"
                      sx={{
                        color: "#98A0AC",
                        font: "Nunito Sans",
                      }}
                    >
                      sq.Ft
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <InputText
                  label="Total Area"
                  type="number"
                  defaultValue="165480"
                  placeholder="Enter Total Area"
                  endAdornment={
                    <Typography
                      component="h6"
                      variant="body1"
                      sx={{
                        color: "#98A0AC",
                        font: "normal normal normal 12px/16px NunitoSans-Regular",
                      }}
                    >
                      sq.Ft
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <InputText
                  label="Year Built"
                  type="date"
                  defaultValue="20-10-21"
                  placeholder="Enter Year Built"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2}>
                <InputText
                  label="Handover Date"
                  type="date"
                  defaultValue="20-10-21"
                  placeholder="Enter Handover Date"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={3}>
                <InputLabel
                  sx={CreatePropertyStyle.labelSx}
                  variant="standard"
                  htmlFor="Property-Description"
                >
                  {"Property Description"}
                </InputLabel>
                <Stack direction="row" spacing={2}>
                  <ToggleButtonGroup
                    sx={CreatePropertyStyle.toggleBtnSx}
                    value={publicList}
                    onChange={handlePublicList}
                    exclusive
                    aria-label="text"
                  >
                    <ToggleButton value="none" aria-label="none">
                      None
                    </ToggleButton>
                    <ToggleButton value="private" aria-label="private">
                      Private
                    </ToggleButton>
                    <ToggleButton value="public" aria-label="public">
                      Public
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Stack>
              </Grid>
              <Grid item sm={12} md={4} lg={2}>
                <InputLabel sx={CreatePropertyStyle.labelSx} variant="standard">
                  {"Pets Allowed"}
                </InputLabel>
                <Box sx={CreatePropertyStyle.toggleCheckSx}>
                  <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <CheckIcon />
                  </ToggleButton>{" "}
                </Box>
              </Grid>
            </Grid>
          </Card>

          <Card mt={3} sx={CreatePropertyStyle.cardSx1}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: "14px", color: "#4E5A6B", marginBottom: "6px" }}
            >
              ADDRESS
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} lg={5}>
                <iframe
                  style={{
                    maxHeight: "200px",
                    maxWidth: "480px",
                    borderRadius: "10px",
                    border: "10px",
                  }}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7776.581393115465!2d80.26024112205799!3d12.953241240010954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669697518359!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  title="map"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
              <Grid item sm={12} md={12} lg={7}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={3} lg={2}>
                    <InputText
                      type="number"
                      label="Door Number"
                      placeholder="Enter Door Number"
                      defaultValue="123"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={5}>
                    <InputText
                      label="Address Line 1"
                      placeholder="Enter Address"
                      defaultValue="East Cost Road"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={5}>
                    <InputText
                      label="Address Line 2"
                      placeholder="Enter Address"
                      defaultValue="Main Road"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <InputText
                      label="Landmark"
                      placeholder="Enter Landmark"
                      defaultValue="Yaa Mohideen Biriyani"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CustomSelect
                      label="Area"
                      defaultValue="Pallavaram"
                      options={[{ key: "Pallavaram", value: "Pallavaram" }]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CustomSelect
                      label="City"
                      defaultValue="Chennai"
                      options={[{ key: "Chennai", value: "Chennai" }]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CustomSelect
                      label="State"
                      defaultValue="Tamil Nadu"
                      options={[{ key: "Tamil Nadu", value: "Tamil Nadu" }]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CustomSelect
                      label="Country"
                      defaultValue="India"
                      options={[{ key: "India", value: "India" }]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3}>
                    <InputText
                      type="number"
                      label="Pincode"
                      placeholder="Enter Pincode"
                      defaultValue="600001"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Card mt={3} sx={CreatePropertyStyle.contactCardSx}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: "14px", color: "#4E5A6B", marginBottom: "6px" }}
            >
              CONTACT & OTHER INFORMATION
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <InputText
                  label="Business Phone"
                  placeholder="Enter Business Phone"
                  defaultValue="22607978"
                  type="number"
                  startAdornment={
                    <Box>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          fontSize: "14px",
                          color: "#4E5A6B !important",
                          borderRight: "1px solid #E4E8EE",
                          paddingRight: "4px",
                        }}
                      >
                        044{" "}
                        <ArrowDropDownIcon
                          sx={{ fontSize: "17px", color: "#98A0AC" }}
                        />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid item sm={12} md={12} lg={3}>
                <InputText
                  label="Mobile Phone"
                  placeholder="Enter Mobile Phone"
                  defaultValue="9876543211"
                  type="number"
                  startAdornment={
                    <>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          fontSize: "14px",
                          color: "#4E5A6B !important",
                          borderRight: "1px solid #E4E8EE",
                          paddingRight: "4px",
                        }}
                      >
                        +91{" "}
                        <ArrowDropDownIcon
                          sx={{ fontSize: "17px", color: "#98A0AC" }}
                        />
                      </Typography>
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <InputText
                  label="Website"
                  type="url"
                  placeholder="Enter Website Link"
                  defaultValue="www.paofficial.com"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <InputText
                  label="Email Address"
                  type="email"
                  placeholder="Enter Email Address"
                  defaultValue="demo@prop.com"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
      <Card sx={CreatePropertyStyle.cardSx}>
        <Stack sx={CreatePropertyStyle.endCard} direction="row">
          <ListItem sx={CreatePropertyStyle.saveBtnSx}>
            <Button
              onClick={() => navigate("/user/dashboard")}
              fullWidth={true}
              variant="outlined"
              sx={{ marginRight: "20px", fontWeight: "bold", fontSize: "14px" }}
            >
              Cancel
            </Button>
            <Button
              sx={CreatePropertyStyle.saveSx}
              fullWidth={true}
              variant="contained"
              disabled={open}
              onClick={() => {
                saveProperty(true);
              }}
            >
              save
            </Button>
          </ListItem>
        </Stack>
      </Card>
      <BasicAlerts
        open={open}
        setOpen={saveProperty}
        message={"Property created successfully"}
        severity={"success"}
      />
      <Box sx={CreatePropertyStyle.boxSx1}>
        <Sidebar />
      </Box>
    </Box>
  );
}
