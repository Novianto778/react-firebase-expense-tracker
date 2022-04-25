import React, { useEffect, useState } from "react";
import useExpenseCategories from "../hooks/use-expense-categories";
import CategoriesItem from "./CategoriesItem";

const DATA = [
  { id: 1, category: "Electric Bill", count: 1, total: 760000 },
  { id: 2, category: "Food", count: 2, total: 200000 },
  { id: 3, category: "Clothes", count: 1, total: 120000 },
];
const Sidebar = () => {
  const [expensePerCategory, setExpensePerCategory] = useState([]);
  const { expensesCategories } = useExpenseCategories();
  useEffect(() => {
    const existExpense = [];
    expensesCategories.forEach((item) => {
      const existExpenseIndex = existExpense.findIndex(
        (exp) => exp.category === item.expenseCtg
      );
      if (existExpenseIndex < 0) {
        existExpense.push({
          id: item.categoryId,
          category: item.expenseCtg,
          count: 1,
          total: item.total,
        });
      } else {
        const expExist = existExpense[existExpenseIndex];
        expExist.count++;
        expExist.total += item.total;
      }
    });
    setExpensePerCategory(existExpense);
  }, [expensesCategories]);

  return (
    <div className="top-0 right-0 left-0 bottom-0 h-full absolute">
      <div className="pt-20 px-8">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        {expensePerCategory.map((expense) => (
          <CategoriesItem key={expense.id} expense={expense} />
        ))}
      </div>
      <div className="px-8 absolute bottom-8">
        <button className="text-lg font-semibold text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline align-text-top mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Categories
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
