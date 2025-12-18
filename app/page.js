"use client";

import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SearchBar from "@/app/components/SearchBar";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-4">
        Discover Your Next Favorite Book
      </h1>
      <p className="text-gray-600 mb-8">
        Search millions of books instantly using live Google Books data.
      </p>
      <SearchBar />
    </div>
  );
}
