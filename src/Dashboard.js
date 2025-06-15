import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        if (!currentUser.emailVerified) {
          navigate("/verify"); // Redirect unverified users
        } else {
          setUser(currentUser); // Verified → set user
        }
      } else {
        navigate("/login"); // Not logged in → login
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🎉 Welcome to your Dashboard</h2>
      {user ? (
        <div>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
          )}
          <h3>{user.displayName || "No Name"}</h3>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}

export default Dashboard;
