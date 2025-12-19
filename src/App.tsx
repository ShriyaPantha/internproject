import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Project from "./pages/Project";
// import CRM from "./pages/CRM";
import Analytics from "./pages/Analytics ";
import HRM from "./pages/HRM";
import TimeTracker from "./pages/TimeTracker";
import Hiring from "./pages/Hiring";

import "./App.css";
import Purchase from "./components/Purchase";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project" element={<Project />} />
      {/* <Route path="/crm" element={<CRM />} /> */}
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/hrm" element={<HRM />} />
      <Route path="/timer" element={<TimeTracker />} />
      <Route path="/hiring" element={<Hiring />} />

    </Routes>
  );
};

export default App;
