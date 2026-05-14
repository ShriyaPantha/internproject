import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Project from "./pages/Project";
import CRM from "./pages/CRM";
import Analytics from "./pages/Analytics ";
import HRM from "./pages/HRM";
import TimeTracker from "./pages/TimeTracker";
import Hiring from "./pages/Hiring";
import './App.css';
import Faq from "./pages/FAQ";
  import Showcase from "./pages/Showcase";
import PricingColumn from "./pages/PricingColumn";
import PricingTable from "./pages/PricingTable";
import Changelog from "./pages/Changelog";
import Migration from "./pages/Migration";
import Guide from "./pages/Guide";
import Components from "./pages/Components";
import Products from "./components/Product";
// import Products from "./components/Product";

// import Purchase from "./components/Purchase";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project" element={<Project />} />
      <Route path="/crm" element={<CRM />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/hrm" element={<HRM />} />
      <Route path="/timer" element={<TimeTracker />} />
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/Showcase" element={<Showcase/>} />
      <Route path="/Pricing/Column" element={<PricingColumn/>} />
      <Route path="/Pricing/Table" element={<PricingTable/>} />
      {/* <Route path="/Pricing/Table" element={<Multi-level/>} /> */}
      <Route path="/changelog" element={<Changelog/>} />
      <Route path="/Migration" element={<Migration/>} />
      <Route path="/Guide" element={<Guide/>} />
      <Route path="/Components" element={<Components/>} />
      <Route path="/products" element={<Products />} />

    </Routes>
    
  );
};

export default App;
