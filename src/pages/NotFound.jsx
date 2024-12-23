import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center container mx-auto p-5 d-flex flex-column gap-4">
      <h1 className="text-warning">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <img
        src="/notFound.gif"
        className="img-fluid rounded not-found-image"
        alt="Page not found graphic"
      />
      <p className="fs-1">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
