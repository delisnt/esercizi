import { useState } from "react";
import { useParams } from 'react-router-dom' 

function UseGithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function fetchUsers() {
    try {
      setLoading(true);
      const resp = await fetch("https://api.github.com/users");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    } catch (error) {
        setError(error)
    }
  }
  return {
    fetchUsers,
    fetchData: data,
    fetchLoading: loading,
    fetchError: error
  };
}

export default UseGithubUser;
