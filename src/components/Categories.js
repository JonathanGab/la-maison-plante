import React from "react";
import "../styles/categories.css";
export default function Categories({
  activeCategory,
  list,
  setActiveCategory,
  filteredName,
  setFilteredName,
}) {
  return (
    <div className="lmj-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">---</option>
        {list.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Reset</button>
      <div>
        <input
          type="text"
          onChange={(e) => setFilteredName(e.target.value)}
          value={filteredName}
        />
      </div>
    </div>
  );
}
