import MoreLikeThis from "../../../components/MoreLikeThis";

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
    return <p className="text-gray-600">Book not found.</p>;
  }

  const info = book.volumeInfo || {};
  const thumb = info.imageLinks?.thumbnail || "/no-book.png";
  const author = info.authors?.[0] || "";
  const category = info.categories?.[0] || "";

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img src={thumb} alt={info.title || "Cover"} className="w-56 rounded" />

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{info.title || "Untitled"}</h1>
            <p className="text-gray-700">
              {info.authors?.join(", ") || "Unknown Author"}
            </p>
            <p className="text-sm text-gray-500">
              Published: {info.publishedDate || "N/A"}
            </p>

            {info.categories?.length ? (
              <p className="text-sm text-gray-500">
                Category: {info.categories.join(", ")}
              </p>
            ) : null}

            <div className="pt-3 text-gray-700 leading-relaxed">
              {info.description ? (
                <div dangerouslySetInnerHTML={{ __html: info.description }} />
              ) : (
                <p>No description available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <MoreLikeThis author={author} category={category} />
    </div>
  );
}
