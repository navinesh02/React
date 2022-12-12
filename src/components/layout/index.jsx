import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/index";
import Sidebar from "../sidebar";
import { Layoutstyle } from "./Style";

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Box sx={Layoutstyle.rootSx}>
        <Box sx={Layoutstyle.sidebarSx}>
          <Sidebar />
        </Box>
        <Box sx={Layoutstyle.mainContentSx}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
