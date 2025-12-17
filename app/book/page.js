async function getBook(id) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function BookDetails({ params }) {
  const book = await getBook(params.id);
  const info = book.volumeInfo;

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex gap-6">
        <img
          src={info.imageLinks?.thumbnail || "/no-book.png"}
          alt={info.title}
          className="w-48"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{info.title}</h1>
          <p className="text-gray-600 mb-1">
            {info.authors?.join(", ") || "Unknown Author"}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Published: {info.publishedDate || "N/A"}
          </p>
          <p className="text-gray-700">
            {info.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
