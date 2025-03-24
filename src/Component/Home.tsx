import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Our Platform</h1>
      <p>Please choose an option below:</p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-success">
          Register
        </Link>
      </div>
    </div>
  );
};
