import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Login from "./Login";
import GoogleLogin from "./GoogleLogin";
import Dashboard from "./Dashboard";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import VerifyPending from "./VerifyPending";
import AuthForm from "./AuthForm";
import ProtectedRoute from "./ProtectedRoute";
import { lazy, Suspense } from "react";

const ForgotPassword = lazy(() => import("./ForgotPassword"));


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
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>


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
