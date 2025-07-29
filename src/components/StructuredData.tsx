// src/components/StructuredData.tsx
import React from 'react';

interface Props {
  data: Record<string, any>;
}

export default function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}
