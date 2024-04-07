import { useEffect, useState } from "react";
export function useGithubUser() {
  const [input, setInput] = useState("");
  const [submitInput, setSubmit] = useState([]);


  useEffect(() => {
    console.log(submitInput);
  }, [submitInput]);

  function handleUsername(e) {
    const value = e.target.value;
    setInput(value);
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit([input]);
    setInput("");
    console.log(submitInput);
  }

  return {
    handleGithubSubmit: handleSubmit,
    handleGithubUsername: handleUsername,
    submitInput,
    inputValue: input
  };
}

