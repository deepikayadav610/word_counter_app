import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container not-found">
      <h1 className="title">Page Not Found</h1>
      <p className="subtitle">The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
