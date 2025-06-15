import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Login from "./Login";
import GoogleLogin from "./GoogleLogin";
import Dashboard from "./Dashboard";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import VerifyPending from "./VerifyPending";
import AuthForm from "./AuthForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google" element={<GoogleLogin />} />
        <Route path="/verify-pending" element={<VerifyPending />} />
        <Route path="/login" element={<AuthForm />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
