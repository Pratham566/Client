import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://server-2ic5.onrender.com";

export const Registration: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post<{ message: string }>(
        `${API_URL}/user/createuser`,
        { name, email, password }
      );

      console.log(result);
      alert("Registration successful! Redirecting to login...");
      navigate("/login");
    } catch (err: any) {
      console.error(
        "Error:",
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="form-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="btn">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
