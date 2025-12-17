"use client";

import Link from "next/link";

export default function BookCard({ item }) {
  const book = item?.volumeInfo || {};
  const id = item?.id;

  return (
    <Link href={`/books/${id}`} className="block">
      <div className="border rounded p-4 shadow hover:shadow-lg transition">
        <img
          src={book.imageLinks?.thumbnail || "/no-book.png"}
          alt={book.title || "No title"}
          className="w-full h-48 object-cover mb-2"
        />
        <h2 className="font-bold text-lg">{book.title || "No title"}</h2>
        <p className="text-gray-600 text-sm">
          {book.authors?.join(", ") || "Unknown Author"}
        </p>
        <p className="text-gray-500 text-sm">
          {book.publishedDate || "No publication date"}
        </p>
      </div>
    </Link>
  );
}
