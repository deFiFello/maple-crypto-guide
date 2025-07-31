// src/components/FilterBar.tsx
'use client';

import { useState } from 'react';

const categories = ['All', 'Health', 'Finance', 'Tools'];
const ratings = [5, 4, 3];

interface FilterBarProps {
  onFilterChange: (filters: { category: string; rating: number }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [category, setCategory] = useState('All');
  const [rating, setRating] = useState(0);

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-700 py-4 px-4 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Category:</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              onFilterChange({ category: e.target.value, rating });
            }}
            className="text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2 py-1"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Min Rating:</label>
          <select
            value={rating}
            onChange={(e) => {
              const newRating = Number(e.target.value);
              setRating(newRating);
              onFilterChange({ category, rating: newRating });
            }}
            className="text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2 py-1"
          >
            <option value={0}>All</option>
            {ratings.map((r) => (
              <option key={r} value={r}>{`${r}★ & up`}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
