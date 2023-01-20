import React from "react";

function SortBar({onSortChange}) {
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={(e)=> onSortChange(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
