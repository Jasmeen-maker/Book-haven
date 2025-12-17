import Link from "next/link";

export default function BookCard({ book }) {
  const info = book.volumeInfo || {};

  return (
    <Link href={`/book/${book.id}`}>
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <img
          src={info.imageLinks?.thumbnail || "/no-book.png"}
          alt={info.title || "No cover available"}
          className="h-48 w-full object-cover mb-3"
        />

        <h3 className="font-semibold">
          {info.title || "Title not available"}
        </h3>

        <p className="text-sm text-gray-600">
          {info.authors?.join(", ") || "Author not available"}
        </p>

        <p className="text-xs text-gray-500">
          {info.publishedDate || "Year not available"}
        </p>
      </div>
    </Link>
  );
}
