"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function MoreLikeThis({ author, category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const query = category
      ? `subject:${category}`
      : author
      ? `inauthor:${author}`
      : null;

    if (!query) return;

    async function fetchMore() {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=6`
      );
      const data = await res.json();
      setItems(data.items || []);
    }

    fetchMore();
  }, [author, category]);

  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">More like this</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
