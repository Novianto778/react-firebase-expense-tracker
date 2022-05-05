import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCategories } from "../context/categories-context";

const CategoriesNav = ({ setExpCategory, expCategory }) => {
  const { categories } = useCategories();

  return (
    <nav>
      <ul className="flex flex-row space-x-8 capitalize">
        <li
          className={`cursor-pointer ${
            !expCategory ? "font-medium text-black" : "text-gray-500"
          }`}
          onClick={() => setExpCategory("")}
        >
          all
        </li>
        {categories.length === 0 ? (
          <Skeleton height={20} width={250} />
        ) : (
          categories.map((ctg) => (
            <li
              key={ctg.id}
              onClick={() => setExpCategory(ctg.name)}
              className={`cursor-pointer ${
                ctg.name === expCategory
                  ? "font-medium text-black"
                  : "text-gray-500 "
              }`}
            >
              {ctg.name}
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default CategoriesNav;
