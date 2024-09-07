
import { useState, useCallback } from "react";
import "./Filter.css";

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    material: "",
    category: "",
    price: "",
  });

  const handleMaterialChange = useCallback(
    (event) => {
      const newFilter = { ...filter, material: event.target.value };
      setFilter(newFilter);
      onFilterChange(newFilter);
    },
    [onFilterChange, filter]
  );

  const handleCategoryChange = useCallback(
    (event) => {
      const newFilter = { ...filter, category: event.target.value };
      setFilter(newFilter);
      onFilterChange(newFilter);
    },
    [onFilterChange, filter]
  );

  const handlePriceChange = useCallback(
    (event) => {
      const newFilter = { ...filter, price: event.target.value };
      setFilter(newFilter);
      onFilterChange(newFilter);
    },
    [onFilterChange, filter]
  );

  return (
    <div className="filter">
      <label>
        Material:
        <select value={filter.material} onChange={handleMaterialChange}>
          <option value="">All</option>
          <option value="wood">Wood</option>
          <option value="metal">Metal</option>
          <option value="plastic">Plastic</option>
        </select>
      </label>

      <label>
        Category:
        <select value={filter.category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="furniture">Furniture</option>
          <option value="decor">Decor</option>
          <option value="kitchen">Kitchen</option>
        </select>
      </label>

      <label>
        Price:
        <input
          type="number"
          value={filter.price}
          onChange={handlePriceChange}
          placeholder="Enter price"
        />
      </label>
    </div>
  );
};

export default Filter;
