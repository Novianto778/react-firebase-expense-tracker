import React, { useState, useEffect } from "react";
import { getDocs, onSnapshot } from "firebase/firestore";
import { categoriesRef } from "../lib/firebase";

const CategoriesContext = React.createContext();

export function CategoriesProvider(props) {
  const [categories, setCategories] = useState([]);
  const value = React.useMemo(() => [categories, setCategories], [categories]);
  return <CategoriesContext.Provider value={value} {...props} />;
}

export function useCategories() {
  const context = React.useContext(CategoriesContext);
  if (!context) {
    throw new Error(`useExpenses must be used within a ExpensesProvider`);
  }
  const [categories, setCategories] = context;

  useEffect(() => {
    function getCategories() {
      // let category = [];
      // const querySnapshot = await getDocs(categoriesRef);
      // querySnapshot.forEach((doc) => {
      //   category.push({ ...doc.data(), id: doc.id });
      // });
      // setCategories(category);
      onSnapshot(categoriesRef, (snapshot) => {
        let category = [];
        snapshot.docs.forEach((doc) => {
          category.push({ ...doc.data(), id: doc.id });
        });
        setCategories(category);
      });
    }
    getCategories();

    return () => getCategories()
  }, []);

  return { categories };
}
