import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { expensesRef } from "../lib/firebase";

const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      let expense = [];
      const querySnapshot = await getDocs(expensesRef);
      querySnapshot.forEach((doc) => {
        expense.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expense);
    }
    getExpenses();
  }, []);
  return { expenses };
};
export default useExpenses;
