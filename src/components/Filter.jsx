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
    [onFilterChange]
  );

  const handleCategoryChange = useCallback(
    (event) => {
      const newFilter = { ...filter, category: event.target.value };
      setFilter(newFilter);
      onFilterChange(newFilter);
    },
    [filter, onFilterChange]
  );

  const handlePriceChange = useCallback(
    (event) => {
      const newFilter = { ...filter, price: event.target.value };
      setFilter(newFilter);
      onFilterChange(newFilter);
    },
    [filter, onFilterChange]
  );
  return (
    <div className="filter">
      <select
        className="filter-opt"
        value={filter.material}
        onChange={handleMaterialChange}
      >
        <option value="">Material</option>
        <option value="leather">Leather</option>
        <option value="plastic">Plastic</option>
        <option value="metal">Metal</option>
      </select>

      <select
        className="filter-opt"
        value={filter.category}
        onChange={handleCategoryChange}
      >
        <option value="">Category</option>
        <option value="carry-on">Carry-on</option>
        <option value="backpack">Backpack</option>
        <option value="duffel">Duffel</option>
      </select>

      <select
        className="filter-opt"
        value={filter.price}
        onChange={handlePriceChange}
      >
        <option value="">Price</option>
        <option value="0-50">0-50</option>
        <option value="50-100">50-100</option>
        <option value="100-200">100-200</option>
      </select>
    </div>
  );
};
export default Filter;
