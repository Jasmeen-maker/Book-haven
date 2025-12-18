"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegister) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      router.push("/books");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full"
      >
        <h1 className="text-3xl font-extrabold text-emerald-600 text-center mb-6">
          📚 Book Haven
        </h1>

        <h2 className="text-xl font-semibold text-center mb-4">
          {isRegister ? "Create an account" : "Sign in"}
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-4 py-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-medium"
        >
          {isRegister ? "Sign Up" : "Sign In"}
        </button>

        <p
          onClick={() => setIsRegister(!isRegister)}
          className="text-sm text-center text-emerald-600 mt-4 cursor-pointer"
        >
          {isRegister
            ? "Already have an account? Sign in"
            : "New user? Create an account"}
        </p>
      </form>
    </div>
  );
}
