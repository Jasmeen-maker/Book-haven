import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-2">Welcome to Book Haven</h1>
        <p className="text-gray-600 mb-6">
          Search and explore books using live Google Books data.
        </p>

        <SearchBar />

        <div className="mt-6">
          <p className="text-sm text-gray-500 mb-2">Try searching:</p>
          <div className="flex flex-wrap gap-2">
            {["Harry Potter", "JavaScript", "Mystery", "Data Science", "Romance"].map((t) => (
              <a
                key={t}
                href={`/books?q=${encodeURIComponent(t)}`}
                className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
