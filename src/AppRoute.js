// import "./App.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";
// import Dashboard from "./screens/dashboard/Dashboard";
// import Header from "./components/header/Header";
// import Login from "./screens/login/Login";
// function AppRoute() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index path="/" element={<Login />} />
//         {/* <Route path="user" element={<Layout />}> */}
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="head" element={<Header />} />
//         {/* </Route> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoute;
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/login/Login";
import Layout from "./components/layout/Layout";
import Properties from "./screens/properties/Properties";
const AppRoute = () => {

  return (      
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="user" element={<Layout />}>
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="property" element={<Properties />} />
         </Route>
       </Routes>
       </BrowserRouter>
      
  );
};

export default AppRoute;
