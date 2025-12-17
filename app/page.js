import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Search millions of books instantly using live Google Books data.
        </p>

        <div className="max-w-xl mx-auto">
          <SearchBar />
        </div>
      </section>

      <section className="text-center">
        <p className="text-sm text-gray-500 mb-3">Popular searches</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Harry Potter", "JavaScript", "Romance", "Mystery", "Self Help"].map(
            (q) => (
              <a
                key={q}
                href={`/books?q=${encodeURIComponent(q)}`}
                className="px-4 py-2 rounded-full bg-white shadow hover:bg-blue-50 hover:text-blue-700 transition text-sm"
              >
                {q}
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
}
