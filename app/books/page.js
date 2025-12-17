"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";

export default function BooksPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // optional filter: show only books with covers
  const [coversOnly, setCoversOnly] = useState(false);

  useEffect(() => {
    if (!query) {
      setItems([]);
      setErr("");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        setErr("");

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=24`
        );

        if (!res.ok) throw new Error("Failed to fetch books");
        const data = await res.json();

        if (!cancelled) {
          setItems(Array.isArray(data.items) ? data.items : []);
        }
      } catch (e) {
        if (!cancelled) {
          setErr("Something went wrong. Try another search.");
          setItems([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [query]);

  const filtered = useMemo(() => {
    if (!coversOnly) return items;
    return items.filter((it) => it?.volumeInfo?.imageLinks?.thumbnail);
  }, [items, coversOnly]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold">Search Books</h1>

        <SearchBar defaultValue={query} />

        <div className="flex items-center gap-2">
          <input
            id="coversOnly"
            type="checkbox"
            checked={coversOnly}
            onChange={(e) => setCoversOnly(e.target.checked)}
          />
          <label htmlFor="coversOnly" className="text-sm text-gray-700">
            Covers only
          </label>
        </div>
      </div>

      {!query && (
        <p className="text-gray-600">
          Type a book name (example: Harry Potter) and press Search.
        </p>
      )}

      {loading && <p className="text-gray-600">Loading books…</p>}

      {err && <p className="text-red-600">{err}</p>}

      {!loading && query && !err && filtered.length === 0 && (
        <p className="text-gray-600">No books found for {query}. Try another search.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
