import { useState, useEffect } from "react";
import useCategories from "./use-categories";
import useExpenses from "./use-expenses";

const useExpenseCategories = () => {
  const [expensesCategories, setExpensesCategories] = useState([]);
  const { categories } = useCategories();
  const { expenses } = useExpenses();
  useEffect(() => {
    const array = expenses.map((expense) => {
      const expenseCategory = categories.find(
        (ctg) => ctg.id === expense.categoryId
      );
      if (expense.categoryId === expenseCategory.id) {
        return { ...expense, expenseCtg: expenseCategory.name };
      }
    });
    setExpensesCategories(array);
  }, [categories, expenses]);
  return { expensesCategories };
};

export default useExpenseCategories;
