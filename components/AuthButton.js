"use client";

import { useAuth } from "../context/AuthContext";

export default function AuthButton() {
  const { user, googleSignIn, logOut } = useAuth();

  if (!user) {
    return (
      <button
        onClick={googleSignIn}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm"
      >
        Sign In
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <img
        src={user.photoURL}
        alt="avatar"
        className="w-8 h-8 rounded-full"
      />
      <span className="text-sm font-medium">{user.displayName}</span>
      <button
        onClick={logOut}
        className="text-sm text-gray-500 hover:text-red-600"
      >
        Sign out
      </button>
    </div>
  );
}
