import React from "react";
import Navbar from "../components/Navbar";

const AddExpenses = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-6">
        <div className="w-1/3 mx-auto">
          <div className="bg-white shadow-md px-8 py-6 rounded-lg">
            <h2 className="mb-4 text-xl font-semibold">Add Your Expense</h2>
            <div className="mb-4">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Expense Title
              </label>
              <input
                type="text"
                id="base-input"
                placeholder="Electric Bill"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Content"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Expense Detail
              </label>
              <textarea
                id="Content"
                rows="2"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the detail..."
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Total
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  Rp.
                </span>
                <input
                  type="number"
                  id="base-input"
                  placeholder="100000"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select expense category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Electric Bill</option>
                <option>Food</option>
              </select>
            </div>
            <div className="flex items-center justify-end mt-8">
              <button className="px-4 py-1 bg-blue-500 text-white mr-4 rounded">
                Add
              </button>
              <button className="px-4 py-1 text-white bg-red-500 mr-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
