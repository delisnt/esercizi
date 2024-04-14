import { useParams} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from 'react';

function GithubUser() {
  const [user, setUser] = useState()
  const { username } = useParams()

  async function fetchUser() {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const json = await res.json()
    setUser(json)
    console.log(json);
  }

  useEffect(() => {
    console.log(username);
  }, [username])
  

  
return (
  <div>
    <h2>{username}</h2>
    <button onClick={fetchUser}>Get user</button>
    {user && (
      <div>
        <h2>{user.name}</h2>
        <h3>{user.login}</h3>
        <img src={user.avatar_url} alt="User avatar" />
      </div>
    )}
  </div>
);
    }

export default GithubUser;
