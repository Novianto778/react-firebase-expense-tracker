import React from "react";

const CategoriesItem = ({ expense }) => {
  const { category, count, total } = expense;
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="min-w-max">
        <h4 className="text-lg font-medium uppercase">{category}</h4>
        <p className="text-sm text-gray-500">
          {count} {count > 1 ? "expenses" : "expense"}
        </p>
      </div>
      <p className="text-base font-semibold text-blue-500">Rp. {total}</p>
    </div>
  );
};

export default CategoriesItem;
