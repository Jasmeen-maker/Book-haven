"use client";

import Link from "next/link";

export default function BookCard({ item }) {
  const info = item.volumeInfo || {};
  const cover = info.imageLinks?.thumbnail || "/no-book.png";

  return (
    <Link href={`/books/${item.id}`}>
      <div className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden h-full">
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          <img
            src={cover}
            alt={info.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-1">
            {info.title || "Untitled"}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-1">
            {info.authors?.join(", ") || "Unknown Author"}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {info.publishedDate || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
}
