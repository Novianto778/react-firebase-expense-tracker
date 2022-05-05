import React, { useState, useEffect } from "react";
import { doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db, expensesRef } from "../lib/firebase";

const ExpensesContext = React.createContext();

export function ExpensesProvider(props) {
  const [expenses, setExpenses] = useState([]);
  const value = React.useMemo(() => [expenses, setExpenses], [expenses]);
  return <ExpensesContext.Provider value={value} {...props} />;
}

export function useExpenses(id) {
  const context = React.useContext(ExpensesContext);
  if (!context) {
    throw new Error(`useExpenses must be used within a ExpensesProvider`);
  }
  const [expenses, setExpenses] = context;

  useEffect(() => {
    async function getExpenses(id) {
      // const querySnapshot = await getDocs(expensesRef);
      // querySnapshot.forEach((doc) => {
      //   expense.push({ ...doc.data(), id: doc.id });
      // });
      if (id) {
        const docSnap = await getDoc(doc(db, "expenses", id));
        if (docSnap.exists()) {
          setExpenses([docSnap.data()]);
        } else {
          console.log("No such document!");
        }
      }

      onSnapshot(expensesRef, (snapshot) => {
        let expense = [];
        snapshot.docs.forEach((doc) => {
          expense.push({ ...doc.data(), id: doc.id });
        });
        setExpenses(expense);
      });
      
    }
    getExpenses(id);

    return () => getExpenses(id);
  }, []);

  return { expenses };
}
