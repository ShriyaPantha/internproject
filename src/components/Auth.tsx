import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function Auth({ open, onClose }: any) {

  const [mode, setMode] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  // ================= LOGIN =================
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);

      onClose();

    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // ================= REGISTER =================
  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password }
      );

      alert(res.data.message);

      setMode("login");

    } catch (err: any) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white dark:bg-gray-900 w-[380px] rounded-2xl shadow-2xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-red-500"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {mode === "login" && "Sign In"}
          {mode === "register" && "Create Account"}
        </h2>

        {/* LOGIN */}
        {mode === "login" && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3 dark:bg-gray-800"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg mb-2 dark:bg-gray-800"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-2 hover:bg-indigo-700"
            >
              Login
            </button>

            <p className="text-center mt-3 text-sm">
              Don't have account?{" "}
              <button
                onClick={()=>setMode("register")}
                className="text-blue-500"
              >
                Sign Up
              </button>
            </p>
          </>
        )}

        {/* REGISTER */}
        {mode === "register" && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3 dark:bg-gray-800"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3 dark:bg-gray-800"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3 dark:bg-gray-800"
            />

            <button
              onClick={handleRegister}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Create Account
            </button>

            <p className="text-center mt-3 text-sm">
              Already have account?{" "}
              <button
                onClick={()=>setMode("login")}
                className="text-blue-500"
              >
                Sign In
              </button>
            </p>
          </>
        )}

      </div>
    </div>
  );
}