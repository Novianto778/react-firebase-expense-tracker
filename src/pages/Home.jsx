import React from "react";
import CategoriesNav from "../components/CategoriesNav";
import ExpenseCard from "../components/ExpenseCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DATA = [
  {
    id: 1,
    dateCreated: "08/02/2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis laborum voluptatum asperiores. Excepturi nulla inventore iure totam fuga. Fugit inventore temporibus accusantium voluptatem facilis perspiciatis eaque officiis, voluptates et.",
    category: "Food",
  },
  {
    id: 2,
    dateCreated: "08/02/2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis laborum voluptatum asperiores. Excepturi nulla inventore iure totam fuga. Fugit inventore temporibus accusantium voluptatem facilis perspiciatis eaque officiis, voluptates et.",
    category: "Food",
  },
  {
    id: 3,
    dateCreated: "08/02/2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis laborum voluptatum asperiores. Excepturi nulla inventore iure totam fuga. Fugit inventore temporibus accusantium voluptatem facilis perspiciatis eaque officiis, voluptates et.",
    category: "Food",
  },
];

const Home = () => {
  return (
    <div className="grid grid-cols-3 justify-between w-full h-screen font-body">
      <div className="col-span-2 bg-gray-100">
        <Navbar />
        <div className="container mx-auto max-w-2xl mt-8">
          <CategoriesNav />
          {DATA.map((card) => (
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
