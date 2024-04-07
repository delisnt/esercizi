import GithubUser from "./GithubUser";
import { useGithubUser } from "./useGitHub";

function SearchUser() {
    const {handleGithubSubmit, handleGithubUsername, submitInput, inputValue} = useGithubUser()

  return (
    <div>
      <form onSubmit={handleGithubSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={inputValue}
          onChange={handleGithubUsername}
        />
        <button type="submit">Submit</button>
        <ul>
        {submitInput.map((username, index) => (
          <li key={index}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
      </form>
    </div>
  );
}

export default SearchUser;
