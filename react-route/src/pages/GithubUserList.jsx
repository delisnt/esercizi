import { Link, Outlet } from "react-router-dom";
import UseGithubUser from "../components/UseGithubUser";
import { useState } from "react";

function Users() {
  const { listData, listError, onRefresh } = UseGithubUser();
  const [input, setInput] = useState("");
 
  function handleInputValue(e) {
    const { value } = e.target;
    setInput(value); 
    console.log(value); 
  }

  return (
    <div>
      <h1>Users list</h1>
      <input type="text" value={input} onChange={handleInputValue} />
      <Link to={input}>
      <button>SUBMIT</button>
      </Link>
      <div className="userlist-container">
        <Outlet />
        {listError && listError}
        <button onClick={onRefresh}>REFRESH</button>
        <ul>
          {listData &&
            listData.map((user) => (
              <Link key={user.id} to={`${user.login}`}>
                <li className="user-list">
                  <img src={user.avatar_url} alt="" />
                  <p>{user.login}</p>
                </li>
              </Link>
            ))}
        </ul>
      </div>
      <Link to="/">
        <h2>Go back</h2>
      </Link>
    </div>
  );
}

export default Users;