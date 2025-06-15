import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Auth App</h1>
      <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to="/google">Google Login</Link>
    </div>
  );
}

export default Home;
