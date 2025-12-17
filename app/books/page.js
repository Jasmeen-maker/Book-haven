import BookCard from "@/components/BookCard";


export default async function BooksPage({ searchParams }) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : "";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Book Haven</h1>
      <p className="mb-4 text-gray-700">
        Search and explore books using live Google Books data.
      </p>

      <form method="get" className="flex gap-2 mb-6">
        <input
          type="text"
          name="q"
          placeholder="Search books..."
          className="flex-1 border p-2 rounded"
          defaultValue={searchParams?.q || ""}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {!query ? (
        <p className="text-gray-600">Please search for a book title or author.</p>
      ) : (
        <BooksResults query={query} />
      )}
    </div>
  );
}

async function BooksResults({ query }) {
  let data;
  try {
    data = await getBooks(query);
  } catch (error) {
    return <p className="text-red-600">Failed to fetch books. Try again later.</p>;
  }

  const books = data?.items || [];

  return books.length === 0 ? (
    <p className="text-gray-600">
      No results found. Some books may have limited metadata.
    </p>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <BookCard key={book.id || index} book={book} />
      ))}
    </div>
  );
}
