"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BooksPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/signin");
  }, [user, router]);

  if (!user) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Books</h1>
      {/* your search UI here */}
    </div>
  );
}
