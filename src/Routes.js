import React from "react";
import AccountDetails from "pages/AccountDetails";
import AccountDetailsOne from "pages/AccountDetailsOne";
import Desktop from "pages/Desktop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/accountdetailsone" element={<AccountDetailsOne />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
