import CloseIcon from "@mui/icons-material/Close";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

export default function BasicAlerts(props) {
  const {
    message = "",
    open = false,
    setOpen,
    severity = "success",
  } = props;


  return(
    <Box
    // className={classes.alert}
    // sx={
    //   (status === "error" && {
    //     "& .MuiPaper-root": {
    //       backgroundColor: "#FF4B4B !important",
    //     },
    //   })
    // }
  >
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
  )
//   return (
//     // <Box sx={{ width: "100%",position:"absolute",marginTop:"100px" }}>
//     //   <Collapse in={open}>
//         <Alert
//           severity={severity}
//           action={
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//               onClick={() => {
//                 setOpen(false);
//               }}
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//           sx={{ mb: 2 }}
//         >
//           {meassage}
//         </Alert>
//     //   </Collapse>
//     // </Box>
//   );
}
