import { useParams } from "react-router-dom";
import useSWR from "swr";

function UseGithubUser() {
  const { username } = useParams()
    const { data, error, mutate  } = useSWR("https://api.github.com/users");
    const { data: userData, error: userError } = useSWR(
      username ? `https://api.github.com/users/${username}` : null
    );

    function onRefresh() {
      mutate()
    }
  return {
    onRefresh,
    userData,
    userError,
    listData: data,
    listError: error
  }
}

export default UseGithubUser;
