import React from "react";
import CategoriesItem from "./CategoriesItem";
const DATA = [
  { id: 1, category: "Electric Bill", count: 1, total: 760000 },
  { id: 2, category: "Food", count: 2, total: 200000 },
  { id: 3, category: "Clothes", count: 1, total: 120000 },
];
const Sidebar = () => {
  return (
    <div className="w-full">
      <div className="mt-20 px-8">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        {DATA.map((expense) => (
          <CategoriesItem key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
