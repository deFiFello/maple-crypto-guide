// src/components/ListingCard.tsx
import React from "react";

type ListingCardProps = {
  slug?: string;
  name: string;
  description?: string;
  tags?: string[];
  rating?: number;
  affiliate_url?: string;
};

export const ListingCard = ({
  slug,
  name,
  description = "No description available.",
  tags = [],
  rating,
  affiliate_url,
}: ListingCardProps) => {
  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-900">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {affiliate_url && (
        <a
          href={affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Product →
        </a>
      )}
    </div>
  );
};

export default ListingCard;
