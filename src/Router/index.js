import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/dashboard/index";
import Login from "../screens/login/index";
import Layout from "../components/layout/index";
import Properties from "../screens/properties/index";
import CreateProperty from "../screens/createProperty/index";
import ViewProperties from "../screens/viewProperties";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="user" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="property" element={<Properties />} />
          <Route path="createproperty" element={<CreateProperty />} />
          <Route path="viewproperty" element={<ViewProperties />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
