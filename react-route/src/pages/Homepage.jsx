import "/src/App.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/users">
        <li>Users</li>
        </Link>
        <Link to="/counter">
        <li>Counter</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Homepage;
