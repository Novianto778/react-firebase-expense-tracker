import React from "react";
import CategoriesItem from "./CategoriesItem";
const DATA = [
  { id: 1, category: "Electric Bill", count: 1, total: 760000 },
  { id: 2, category: "Food", count: 2, total: 200000 },
  { id: 3, category: "Clothes", count: 1, total: 120000 },
];
const Sidebar = () => {
  return (
    <div className="w-full h-full relative">
      <div className="pt-20 px-8">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        {DATA.map((expense) => (
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
