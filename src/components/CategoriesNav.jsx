import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useCategories from "../hooks/use-categories";

const CategoriesNav = () => {
  const { categories } = useCategories();

  return (
    <nav>
      <ul className="flex flex-row space-x-8 capitalize">
        <li className="font-medium">all</li>
        {categories.length === 0 ? (
          <Skeleton height={20} width={250} />
        ) : (
          categories.map((ctg) => (
            <li key={ctg.id} className="text-gray-500">
              {ctg.name}
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default CategoriesNav;
