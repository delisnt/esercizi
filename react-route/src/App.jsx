import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import GithubUserList from "./pages/GithubUserList";
import Homepage from "./pages/Homepage";
import GithubUser from "./components/GithubUser";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={"Enter a user or select it!"}></Route>
          <Route path=":username" element={<GithubUser />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
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
    </div>
  );
}

export default App;
