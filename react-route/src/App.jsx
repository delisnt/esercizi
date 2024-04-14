import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Homepage from "./pages/Homepage";
import GithubUser from "./components/GithubUser";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />}>
          <Route path=":username" element={<GithubUser />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
