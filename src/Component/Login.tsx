import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL =
  "https://server-kpm622r6h-parmarpratham333-gmailcoms-projects.vercel.app";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); // To redirect after login

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ message: string; token: string }>(
        `${API_URL}/user/login`, // ✅ Updated API URL
        { email, password },
        { withCredentials: true } // ✅ Include cookies if needed
      );

      alert(response.data.message);
      localStorage.setItem("token", response.data.token);

      navigate("/HomePage"); // ✅ Redirect after login
    } catch (error: any) {
      console.error("Error:", error.response?.data?.message || "Login failed");
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="btn btn-link">
          Register
        </Link>
      </p>
    </div>
  );
};
