import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useCategories from "../hooks/use-categories";
import useExpenseCategories from "../hooks/use-expense-categories";
import { db } from "../lib/firebase";

const EditExpenses = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { expensesCategories } = useExpenseCategories(id);
  const { categories } = useCategories();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [total, setTotal] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(expensesCategories[0]?.title);
    setDetail(expensesCategories[0]?.content);
    setTotal(expensesCategories[0]?.total);
    setCategoryId(expensesCategories[0]?.categoryId);
  }, [expensesCategories]);

  const form = document.querySelector("#form");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotValid = !title || !detail || !total || !categoryId;
    if (!isNotValid) {
      setError("");
      updateDoc(doc(db, "expenses", id), {
        title,
        content: detail,
        total: +total,
        categoryId,
      }).then(() => {
        form.reset();
        navigate("/");
      });
    } else {
      setError("All field are required!");
    }
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-2">
        <div className="w-1/3 mx-auto">
          <form id="form" className="bg-white shadow-md px-8 py-6 rounded-lg">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <h2 className="mb-4 text-xl font-semibold">Edit Your Expense</h2>
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
                onInput={(e) => setTitle(e.target.value)}
                value={title || ""}
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
                onInput={(e) => setDetail(e.target.value)}
                value={detail || ""}
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
                  onInput={(e) => setTotal(e.target.value)}
                  value={total || ""}
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
                onInput={(e) => setCategoryId(e.target.value)}
                value={categoryId}
              >
                <option value="0" disabled>
                  All
                </option>
                {categories.map((ctg) => (
                  <option className="uppercase" key={ctg.id} value={ctg.id}>
                    {ctg.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-end mt-6">
              <button
                type="submit"
                className="px-4 py-1 bg-blue-500 text-white mr-4 rounded"
                onClick={(e) => handleSubmit(e)}
              >
                Update
              </button>
              <button
                className="px-4 py-1 text-white bg-red-500 mr-4 rounded"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditExpenses;
