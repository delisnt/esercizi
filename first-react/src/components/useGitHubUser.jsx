import { useState } from "react";
export function useGithubUser() {

  

  const [searchInput, setSearchInput] = useState('');
  const [submitInput, setSubmitInput] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitInput((d) => [...d, searchInput])
  }

  function handleInputChange(e) {
    e.preventDefault()
    setSearchInput(e.target.value);
  }

  return {
    handleInputChange,
    handleSubmit,
    submitInput,
    searchInput
  };
}

