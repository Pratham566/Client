import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://serverloginregistration.onrender.com";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ message: string; token: string }>(
        `${API_URL}/user/login`,
        { email, password },
        { withCredentials: true }
      );

      alert(response.data.message);
      localStorage.setItem("token", response.data.token);

      navigate("/HomePage");
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
