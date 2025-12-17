"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";

export default function BooksPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchBooks() {
      setLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=24`
      );
      const data = await res.json();
      setBooks(data.items || []);
      setLoading(false);
    }

    fetchBooks();
  }, [query]);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">
          Results for <span className="text-blue-700">{query}</span>
        </h1>
        <SearchBar defaultValue={query} />
      </div>

      {loading && <p className="text-gray-600">Loading books...</p>}

      {!loading && books.length === 0 && (
        <p className="text-gray-600">No books found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((item) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
