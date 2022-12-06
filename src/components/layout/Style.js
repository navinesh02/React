import { theme } from "../../theme"

export const Layoutstyle = {
    rootSx: {
        width: "100vw",
        display: "flex",
        // backgroundColor: "#F5F7FA"

      },
      sidebarSx: {
        width: "68px",
        height: "auto",
        [theme.breakpoints.only("xs")]: {
          width: "0px !important",
        },

      },
      mainContentSx: {
        width: "100%",
        height: "auto",
        // marginTop:"56px"
        //  backgroundColor: "#F5F7FA"

      },
}
