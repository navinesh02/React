import React from "react";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CustomStyle } from "./style";
import { useState } from "react";

export default function CustomSelect(props) {
  const { label = "", defaultValue = "", options = "" } = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  CustomSelect.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.string,
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <InputLabel sx={CustomStyle.labelSx} variant="standard">
        {label}{" "}
      </InputLabel>
      <FormControl fullWidth>
        <Select
          sx={CustomStyle.textfieldSx}
          onChange={handleChange}
          value={selectedValue}
        >
          <MenuItem value={""}>None</MenuItem>
          {options &&
            options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.key}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
