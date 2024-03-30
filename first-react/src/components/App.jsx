import Colors from "./Colors";
import Counter from "./Counter";
import FocusableInput from "./FocusableInput";
import Login from "./Login";
import LoginForm from "./LoginForm";
import UncontrolledLogin from "./UncontrolledLogin";
import React from "react";

function App() {
  function handleLogin({ username, password }) {
    console.log(`You are logged as ${username}`);
    console.log(password);
  }

  return (
    <React.StrictMode>
      <Counter />
      <Login onLogin={handleLogin} />
      <LoginForm />
      <UncontrolledLogin />
      <FocusableInput />
      <Colors colors={[
        {name: 'Red', id: 1},
        {name: 'Blue', id: 2},
        {name: 'Green', id: 3}
      ]}/>
    </React.StrictMode>
  );
}

export default App;
