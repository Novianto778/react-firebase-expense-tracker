import React from "react";
import moment from "moment";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../constant/routes";

const ExpenseCard = ({ detail }) => {
  const { dateCreated, content, expenseCtg, title, total, id } = detail;
  let currentDate = 0;
  if (dateCreated) {
    currentDate = dateCreated.seconds * 1000;
  }
  const date = moment(currentDate).format("ll");
  const handleDelete = (id) => {
    const expenseRef = doc(db, "expenses", id);
    deleteDoc(expenseRef);
  };
  return (
    <div className="bg-white shadow-sm px-8 py-6 rounded-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">{date}</p>
        <p className="text-blue-500 font-medium uppercase">{expenseCtg}</p>
      </div>
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <p className="text-sm text-gray-700">{content}</p>
      <div className="flex items-center justify-between mt-8">
        <h6 className="text-lg text-blue-500 font-semibold">Rp. {total}</h6>
        <div>
          <Link to={ROUTES.EDIT_EXPENSES + "/" + id}>
            <button className="px-4 py-1 bg-yellow-400 mr-4 rounded">
              Edit
            </button>
          </Link>
          <button
            className="px-4 py-1 text-white bg-red-500 mr-4 rounded"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExpenseCard;
