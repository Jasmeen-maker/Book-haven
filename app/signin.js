"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { user, googleSignIn } = useAuth();
  const router = useRouter();

  // If already logged in → go home
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        
        {/* LOGO */}
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">
          📚 Book Haven
        </h1>

        <p className="text-gray-600 mb-8">
          Sign in to discover and save your favorite books
        </p>

        {/* SIGN IN BUTTON */}
        <button
          onClick={googleSignIn}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-medium transition"
        >
          Sign in with Google
        </button>

        <p className="text-xs text-gray-400 mt-6">
          Secure authentication powered by Firebase
        </p>
      </div>
    </div>
  );
}
