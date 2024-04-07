import { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          setError('User not found');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    if (username) {
      fetchData();
    }
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{error && error}</h2>
      <h2>{data.name}</h2>
      <h3>{data.login}</h3>
      <img src={data.avatar_url} alt="User avatar" />
    </div>
  );
}

export default GithubUser;