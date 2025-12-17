import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Book Haven",
  description: "Search and explore books using Google Books API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-extrabold text-emerald-600">
                📚 Book Haven
              </Link>
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-4 py-10">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
