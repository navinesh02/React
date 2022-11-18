import Login from "./screens/login/login";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Header from "./components/header/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        {/* <Route path="user" element={<Layout />}> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="head" element={<Header />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
