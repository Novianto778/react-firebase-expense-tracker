import { useState, useEffect } from "react";
import { useCategories } from "../context/categories-context";
import { useExpenses } from "../context/expenses-context";

const useExpenseCategories = (id) => {
  const [expensesCategories, setExpensesCategories] = useState([]);
  const { categories } = useCategories();
  const { expenses } = useExpenses(id);
  useEffect(() => {
    function getExpensesCategories(id) {
      const array = expenses.map((expense) => {
        const expenseCategory = categories.find(
          (ctg) => ctg.id === expense.categoryId
        );
        if (expense.categoryId === expenseCategory.id) {
          return { ...expense, expenseCtg: expenseCategory.name };
        }
      });
      setExpensesCategories(array);
    }
    getExpensesCategories(id);

    return () => getExpensesCategories(id);
  }, [categories, expenses]);

  return { expensesCategories };
};

export default useExpenseCategories;
