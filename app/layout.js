import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Book Haven",
  description: "Search and explore books using Google Books API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              Book Haven
            </Link>
            <Link href="/books" className="text-sm text-blue-700 hover:underline">
              Browse / Search
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="border-t bg-white mt-10">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
            Built with Next.js + Google Books API
          </div>
        </footer>
      </body>
    </html>
  );
}
