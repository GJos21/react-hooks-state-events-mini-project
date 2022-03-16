import React from "react";

function CategoryFilter({ categories, setFilter, catFilter }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) =>
        <button
          className={category === catFilter ? "selected" : ""}
          key={category}
          onClick={() => setFilter(category)}
        >{category}</button>)
}
    </div >
  );
}

export default CategoryFilter;
