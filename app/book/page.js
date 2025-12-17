export const dynamic = "force-dynamic";

async function getBook(id) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function BookDetailsPage({ params }) {
  const book = await getBook(params.id);

  if (!book) {
    return <p className="p-6 text-gray-600">Book not found.</p>;
  }

  const info = book.volumeInfo || {};

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={info.imageLinks?.thumbnail || "/no-book.png"}
            alt={info.title || "No title"}
            className="w-48"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">{info.title || "No title"}</h1>

            <p className="text-gray-600 mb-1">
              {info.authors?.join(", ") || "Unknown Author"}
            </p>

            <p className="text-sm text-gray-500 mb-3">
              Published: {info.publishedDate || "N/A"}
            </p>

            {info.categories?.length ? (
              <p className="text-sm text-gray-500 mb-3">
                Categories: {info.categories.join(", ")}
              </p>
            ) : null}

            <p className="text-gray-700">
              {info.description ? (
                <span dangerouslySetInnerHTML={{ __html: info.description }} />
              ) : (
                "No description available."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
