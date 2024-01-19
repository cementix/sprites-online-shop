import React, { useContext } from "react";
import { observer } from "mobx-react-lite"; // Import the observer function
import "./Shop.scss";
import { Context } from "../..";

const Shop = observer(() => {
  const { sprites } = useContext(Context);

  const handleCategoryClick = (category) => {
    sprites.setSelectedCategory(category);
  };

  return (
    <div className="shopWrapper page">
      <div className="filters">
        <ul>
          {sprites.categories.map((category) => (
            <li
              className={
                category.id === sprites.selectedCategory.id
                  ? "activeCategory"
                  : "negr"
              }
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Shop;
