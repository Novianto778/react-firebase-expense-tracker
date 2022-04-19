import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpenses from "./pages/AddExpenses";
import Home from "./pages/Home";
import {ROUTES} from "./constant/routes"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ADD_EXPENSES} element={<AddExpenses />} />
      </Routes>
    </Router>
  );
};

export default App;
