import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { categoriesRef } from "../lib/firebase";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      let category = [];
      const querySnapshot = await getDocs(categoriesRef);
      querySnapshot.forEach((doc) => {
        category.push({ ...doc.data(), id: doc.id });
      });
      setCategories(category);
    }
    getCategories();
  }, []);

  return { categories, setCategories };
};

export default useCategories;
