import BookCard from "../../components/BookCard";

async function getBooks(query) {
  if (!query) return [];
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`,
    { cache: "no-store" } // ensures fresh results
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.items || [];
}

export default async function BooksPage({ searchParams }) {
  const query = searchParams?.q ?? "";
  if (!query) {
    return <p className="p-6 text-gray-600">Please search for a book.</p>;
  }

  const books = await getBooks(query);

  if (books.length === 0) {
    return <p className="p-6 text-gray-600">No books found for {query}.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Results for {query}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book.volumeInfo} />
        ))}
      </div>
    </div>
  );
}
