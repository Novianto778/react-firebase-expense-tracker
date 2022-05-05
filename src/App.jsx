import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpenses from "./pages/AddExpenses";
import Home from "./pages/Home";
import { ROUTES } from "./constant/routes";
import EditExpenses from "./pages/EditExpenses";
import { ExpensesProvider } from "./context/expenses-context";
import { CategoriesProvider } from "./context/categories-context";

const App = () => {
  return (
    <ExpensesProvider>
      <CategoriesProvider>
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ADD_EXPENSES} element={<AddExpenses />} />
            <Route
              path={`${ROUTES.EDIT_EXPENSES}/:id`}
              element={<EditExpenses />}
            />
          </Routes>
        </Router>
      </CategoriesProvider>
    </ExpensesProvider>
  );
};

export default App;
