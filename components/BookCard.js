"use client";

import Link from "next/link";

export default function BookCard({ item }) {
  const info = item?.volumeInfo || {};
  const thumb = info.imageLinks?.thumbnail || "/no-book.png";

  return (
    <Link href={`/books/${item.id}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 h-full">
        <img
          src={thumb}
          alt={info.title || "Book cover"}
          className="w-full h-56 object-cover rounded mb-3"
        />
        <h2 className="font-semibold text-lg line-clamp-2">{info.title || "Untitled"}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-1">
          {info.authors?.join(", ") || "Unknown Author"}
        </p>
        <p className="text-xs text-gray-500 mt-1">{info.publishedDate || "N/A"}</p>
      </div>
    </Link>
  );
}
