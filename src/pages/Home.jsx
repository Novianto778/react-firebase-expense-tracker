import React from "react";
import CategoriesNav from "../components/CategoriesNav";
import ExpenseCard from "../components/ExpenseCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useExpenseCategories from "../hooks/use-expense-categories";

const Home = () => {
  const { expensesCategories } = useExpenseCategories();
  return (
    <div className="grid grid-cols-3 justify-between w-full h-screen font-body">
      <div className="col-span-2 bg-gray-100">
        <Navbar />
        <div className="container mx-auto max-w-2xl mt-8">
          <CategoriesNav />
          {expensesCategories.map((card) => (
            <ExpenseCard key={card.id} detail={card} />
          ))}
        </div>
      </div>
      <div className="col-span-1 bg-white">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
