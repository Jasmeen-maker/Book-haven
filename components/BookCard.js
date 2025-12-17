"use client";

export default function BookCard({ book }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={book.imageLinks?.thumbnail || "/no-book.png"}
        alt={book.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="font-bold text-lg">{book.title}</h2>
      <p className="text-gray-600 text-sm">
        {book.authors?.join(", ") || "Unknown Author"}
      </p>
    </div>
  );
}
