import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "../context/AuthContext";



export const metadata = {
  title: "Book Haven",
  description: "Search and explore books using Google Books API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-extrabold text-emerald-600"
            >
              📚 Book Haven
            </Link>

            <Link
              href="/books"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
            >
              Browse
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>

        <footer className="border-t bg-white mt-16">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Book Haven · Google Books API
          </div>
        </footer>
      </body>
    </html>
  );
}
