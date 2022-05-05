import '../wdyr'
import React, { useState } from "react";
import CategoriesNav from "../components/CategoriesNav";
import ExpenseCard from "../components/ExpenseCard";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useExpenses } from "../context/expenses-context";
import useExpenseCategories from "../hooks/use-expense-categories";

const Home = () => {
  const { expensesCategories } = useExpenseCategories();
  const [expCategory, setExpCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const filteredExpenses = expensesCategories.filter((card) => {
    return expCategory ? card.expenseCtg === expCategory : true;
  });

  // const { expenses } = useExpenses();
  // console.log(expenses);
  // console.log('render')

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <Modal handleHideModal={handleHideModal} />}
      <div className="grid grid-cols-3 justify-between w-full h-screen font-body">
        <div className="col-span-2 bg-gray-100">
          <Navbar />
          <div className="container mx-auto max-w-2xl mt-8">
            <CategoriesNav
              setExpCategory={setExpCategory}
              expCategory={expCategory}
            />
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((card) => (
                <ExpenseCard key={card.id} detail={card} />
              ))
            ) : (
              <div className="w-full mx-auto mt-24">
                <h1 className="text-center font-semibold text-xl">
                  There is no expenses with {expCategory} category
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 bg-white relative h-screen w-full">
          <Sidebar handleShowModal={handleShowModal} />
        </div>
      </div>
    </>
  );
};

export default Home;

// Home.whyDidYouRender = true