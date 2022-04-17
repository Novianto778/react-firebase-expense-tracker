import React from "react";

const CategoriesItem = ({ expense }) => {
  const { category, count, total } = expense;
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <h4 className="text-lg font-medium">{category}</h4>
        <p className="text-sm text-gray-500">
          {count} {count > 1 ? "expenses" : "expense"}
        </p>
      </div>
      <h6 className="text-base font-semibold">Rp. {total}</h6>
    </div>
  );
};

export default CategoriesItem;
