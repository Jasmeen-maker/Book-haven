"use client";

import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function AuthButton() {
  const { user, logOut } = useAuth();

  // NOT logged in → go to sign-in page
  if (!user) {
    return (
      <Link
        href="/signin"
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
      >
        Sign In
      </Link>
    );
  }

  // LOGGED IN
  return (
    <div className="flex items-center gap-3">
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
      )}

      <span className="text-sm font-medium">
        {user.displayName}
      </span>

      <button
        onClick={logOut}
        className="text-sm text-gray-500 hover:text-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}
