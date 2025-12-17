import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Book Haven</h1>
      <p className="mb-6 text-gray-600">
        Search and explore books using live Google Books data.
      </p>
      <SearchBar />
    </div>
  );
}
