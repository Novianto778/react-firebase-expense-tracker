import React from "react";

const ExpenseCard = ({ detail }) => {
  const { dateCreated, content, category } = detail;
  return (
    <div className="bg-white shadow-sm px-8 py-6 rounded-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">{dateCreated}</p>
        <p className="text-blue-500 font-medium">{category}</p>
      </div>
      <p className="text-sm text-gray-700">{content}</p>
      <div className="flex items-center justify-end mt-8">
        <button className="px-4 py-1 bg-yellow-400 mr-4 rounded">Edit</button>
        <button className="px-4 py-1 text-white bg-red-500 mr-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
