"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function MoreLikeThis({ author, category }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Prefer category, fallback to author
  const query =
    category ? `subject:${category}` : author ? `inauthor:${author}` : "";

  useEffect(() => {
    if (!query) return;

    let cancelled = false;

    async function run() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=9`
        );
        const data = await res.json();
        if (!cancelled) setItems(Array.isArray(data.items) ? data.items : []);
      } catch {
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [query]);

  if (!query) return null;

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">
        More like this {category ? `(Category: ${category})` : author ? `(Author: ${author})` : ""}
      </h2>

      {loading && <p className="text-gray-600">Loading related books…</p>}

      {!loading && items.length === 0 && (
        <p className="text-gray-600">No related books found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <BookCard key={it.id} item={it} />
        ))}
      </div>
    </div>
  );
}
