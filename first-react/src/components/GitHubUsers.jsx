import GithubUser from "./GithubUser";
import { useGithubUser } from "./useGitHubUser";

function SearchUser() {
    const {handleInputChange, searchInput, handleSubmit, submitInput} = useGithubUser()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={searchInput}
          onChange={handleInputChange}
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
