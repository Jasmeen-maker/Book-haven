// app/book/page.js
import Link from "next/link";

const exampleBooks = [
  { id: "zyTCAlFPjgYC", title: "The Google Story" },
  { id: "uWgB6RFjzCYC", title: "Learning React" },
];

export default function BookListPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      <ul className="space-y-2">
        {exampleBooks.map((book) => (
          <li key={book.id}>
            <Link
              href={`/book/${book.id}`}
              className="text-blue-600 hover:underline"
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
