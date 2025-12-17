import MoreLikeThis from "../../../components/MoreLikeThis";

async function getBook(id) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  return res.json();
}

export default async function BookDetailsPage({ params }) {
  const book = await getBook(params.id);
  const info = book.volumeInfo || {};

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-2xl shadow p-8">
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          <img
            src={info.imageLinks?.thumbnail || "/no-book.png"}
            className="rounded-lg shadow"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">{info.title}</h1>
            <p className="text-gray-600 mb-1">
              {info.authors?.join(", ") || "Unknown Author"}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Published: {info.publishedDate || "N/A"}
            </p>

            <div className="prose max-w-none text-gray-700">
              {info.description || "No description available."}
            </div>
          </div>
        </div>
      </div>

      <MoreLikeThis
        author={info.authors?.[0]}
        category={info.categories?.[0]}
      />
    </div>
  );
}
