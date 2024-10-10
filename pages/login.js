// pages/login.js
import { useState, useEffect } from "react";
import { useAuth } from "@/context/Auth";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("password");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials (for example purposes)
    if (username === "user" && password === "password") {
      sessionStorage.setItem("loggedIn", "1");
      login();
      router.push("/"); // Redirect to homepage after successful login
    } else {
      sessionStorage.setItem("loggedIn", "0");

      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") === "1") {
      login();
      router.push("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
