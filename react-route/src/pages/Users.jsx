import { Link, Outlet } from "react-router-dom";
import UseGithubUser from "../components/UseGithubUser";
function Users() {
  const { fetchData, fetchError, fetchLoading, fetchUsers } = UseGithubUser();

  return (
    <div>
      <h1>Users list</h1>
      <div className="userlist-container">
        <Outlet />
        {fetchError && fetchError}
        {fetchLoading && fetchLoading}
        <ul>
          {fetchData &&
            fetchData.map((user) => (
              <Link key={user.id} to={`${user.login}`}>
                <li className="user-list">
                  <img src={user.avatar_url} alt="" />
                  <p>{user.login}</p>
                </li>
              </Link>
            ))}
        </ul>
      </div>

      <button onClick={fetchUsers}>FETCH</button>

      <Link to="/">
        <h2>Go back</h2>
      </Link>
    </div>
  );
}

export default Users;
