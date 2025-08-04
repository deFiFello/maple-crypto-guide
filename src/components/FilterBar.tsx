// src/components/FilterBar.tsx
'use client';
import React, { useState, useEffect } from 'react';

interface FilterBarProps {
  onFilterChange: (filters: { category: string; rating: number }) => void;
  data: { category: string }[];
  labelMap: Record<string, string>;
}

const FilterBar = ({ onFilterChange, data, labelMap }: FilterBarProps) => {
  const categories = Array.from(
    new Set(data.map((item) => item.category))
  );
  const [category, setCategory] = useState('All');
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    onFilterChange({ category, rating });
  }, [category, rating]);
  
  return (
    <div className="flex items-center gap-4 flex-wrap mb-4">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="ml-2 px-2 py-1 rounded border dark:bg-zinc-800"
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {labelMap?.[cat] ?? cat}
            </option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Min Rating:
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="ml-2 px-2 py-1 rounded border dark:bg-zinc-800"
        >
          <option value={0}>All</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}★+
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterBar;
