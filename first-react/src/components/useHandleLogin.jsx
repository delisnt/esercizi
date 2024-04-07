import { useState } from "react";

function useHandleLogin() {
  function createData() {
    return {
      username: "",
      password: "",
      session: false,
    };
  }
  const [data, setData] = useState(createData());

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData(createData())
  }

  return {
    data,
    onInputChange: handleInputChange,
    onHandleSubmit: handleSubmit,
  };
}

export default useHandleLogin;
