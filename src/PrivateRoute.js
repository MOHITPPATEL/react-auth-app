import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import VerifyPending from "./VerifyPending";
function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  // User is logged in but not verified
  if (user && !user.emailVerified) return <Navigate to="/verify-pending" />;

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
