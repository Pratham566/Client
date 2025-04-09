import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import { Registration } from "./Component/Registration";
import HomePage from "./Component/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="form-box-wrapper">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Home />} />
            <Route path="/HomePage" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
