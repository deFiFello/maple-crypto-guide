// src/components/ListingCard.tsx
'use client';

import React from "react";
import Link from "next/link";

interface ListingCardProps {
  slug?: string;
  name: string;
  description?: string;
  tags?: string[];
  rating?: number;
  affiliate_url?: string;
}

export const ListingCard = ({
  slug,
  name,
  description = "No description available.",
  tags = [],
  rating,
  affiliate_url,
}: ListingCardProps) => {
  const cardCore = (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-lg hover:scale-[1.01] transition bg-white dark:bg-zinc-900 h-full">
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
        {affiliate_url && (
          <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400 px-2 py-0.5 rounded-full">
            Verified
          </span>
        )}
      </div>

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

      {rating && (
        <div className="flex items-center text-yellow-500 text-sm mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating ? "★" : "☆"}</span>
          ))}
        </div>
      )}

      {/* Only show affiliate link if not wrapped in <Link> */}
      {!slug && affiliate_url && (
        <div className="mt-2">
          <a
            href={affiliate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            onClick={() => console.log("Affiliate click:", name)}
          >
            View Product →
          </a>
        </div>
      )}
    </div>
  );

  return slug ? (
    <Link href={`/web3-products/${slug}`} className="block h-full">
      {cardCore}
    </Link>
  ) : (
    cardCore
  );
};

export default ListingCard;
