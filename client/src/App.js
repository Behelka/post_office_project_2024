import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AddDepartment from "./components/AddDepartment/AddDepartment";
import AddLocation from "./components/AddLocation/AddLocation";
import CustomerProfile from "./components/CustomerProfile/CustomerProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManagerPortal from "./components/ManagerPortal/ManagerPortal";
import Navbar from "./components/navBar/navBar";
import PackagePortal from "./components/PackagePortal/PackagePortal";
import Reports from "./components/Reports/Reports";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import TrackingHistory from "./components/TrackingHistory/TrackingHistory";
import EmployeeShop from "./components/Shop/EmployeeShop";
import Stops from "./components/PackagePortal/Stops";
import Contact from "./components/ContactUS/contact";
import CustomerSearch from "./components/CustomerSearch/CustomerSearch";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";
export { SERVER_URL };

const App = () => {
  let links = [
    ["", "Home"],
    ["Login", "Login/Register"],
    ["Shop", "Shop"],
    ["AboutUs", "About Us"],
    ["Contactus", "Contact Us"],
  ];

  let user = ""; // This is to see different roles

  // console.log(localStorage);

  if (localStorage.getItem("Customer_Email_Address")) {
    user = "customer";
  } else if (localStorage.getItem("Employee_Email")) {
    user = "employee";
  }

  if (user === "employee") {
    links = [
      ["", "Home"],
      ["PackagePortal", "Package Portal"],
      ["TrackingHistory", "Tracking History"],
      ["EmployeeProfile", "Profile"],
      ["EmployeeShop", "Shop"],
      ["Reports", "Reports"],
    ];
  }

  if (user === "manager") {
    links = [
      ["", "Home"],
      ["PackagePortal", "Package Portal"],
      ["TrackingHistory", "Tracking History"],
      ["ManagerPortal", "Manager Portal"],
      ["EmployeeProfile", "Profile"],
      ["EmployeeShop", "Shop"],
      ["Reports", "Reports"],
    ];
  }

  if (user === "customer") {
    links = [
      ["", "Home"],
      ["Dashboard", "Dashboard"],
      ["TrackingHistory", "Tracking History"],
      ["Shop", "Shop"],
      ["AboutUs", "About"],
      ["Contactus", "Contact Us"],
      ["CustomerProfile", "Profile"],
    ];
  }

  if (user === "admin") {
    links = [
      ["", "Home"],
      ["PackagePortal", "Package Portal"],
      ["TrackingHistory", "Tracking History"],
      ["Reports", "Reports"],
      ["ManagerPortal", "Manager Portal"],
      ["AddDepartment", "Add Department"],
      ["AddLocation", "Add Location"],
      ["EmployeeProfile", "Profile"],
      ["EmployeeShop", "Shop"],
    ];
  }

  return (
    <Router>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/PackagePortal" element={<PackagePortal />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/TrackingHistory" element={<TrackingHistory />} />
        <Route path="/CustomerProfile" element={<CustomerProfile />} />
        <Route path="/EmployeeProfile" element={<EmployeeProfile />} />
        <Route path="/ManagerPortal" element={<ManagerPortal />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/AddDepartment" element={<AddDepartment />} />
        <Route path="/AddLocation" element={<AddLocation />} />
        <Route path="/EmployeeShop" element={<EmployeeShop />} />
        <Route path="/stops/:packageId" element={<Stops />} />
        <Route path="/ContactUS" element={<Contact />} />
        <Route path="/CustomerSearch" element={<CustomerSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
