import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          Book Haven
        </Link>
      </div>
    </nav>
  );
}
