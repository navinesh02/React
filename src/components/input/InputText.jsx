import { InputLabel, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { InputStyle } from "./style";
import {theme} from "../../theme"
export default function InputText(props) {
  const { label, defaultValue, options,disabled, placeholder,startAdornment,type } = props;
  // const {label}= props;
  return (
    <>
      <InputLabel sx={InputStyle.labelSx} variant="standard">
        {label}{" "}
      </InputLabel>
      <TextField
       sx={
        (
        disabled && {
          opacity: 0.9,
          "& div, div:hover": { background: theme.palette.background.lightGray, },
        })
      }
        required
        id="outlined-required"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          readOnly: disabled,
          style: InputStyle.textfieldSx,
        }}
        disabled={disabled}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        fullWidth={true}
      ></TextField>
    </>
  );
}
