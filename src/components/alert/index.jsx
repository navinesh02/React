import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import * as React from "react";
import PropTypes from 'prop-types';

export default function BasicAlerts(props) {
  const { message = "", open = false, setOpen = "", severity = "success" } = props;
  
  BasicAlerts.propTypes = {
    message: PropTypes.number,
    setOpen: PropTypes.string,
    severity: PropTypes.string,
  }

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={setOpen}
      >
        <Alert onClose={setOpen} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
