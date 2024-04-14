import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404: Error not found</h1>
      <Link to="/">Go Back</Link>
    </>
  );
}

export default NotFound;
