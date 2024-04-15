import { useParams} from 'react-router-dom'
import { useEffect } from 'react';
import UseGithubUser from './UseGithubUser';

function GithubUser() {
  const { username } = useParams()
  const {userData, userError} = UseGithubUser()

  useEffect(() => {
    console.log(username);
  }, [username])
  
return (
  <div>
    <h2>{username}</h2>
    {userError && userError}
    {userData && (
      <div>
        <h2>{userData.name}</h2>
        <h3>{userData.login}</h3>
        <img src={userData.avatar_url} alt="User avatar" />
      </div>
    )}
  </div>
);
    }

export default GithubUser;
