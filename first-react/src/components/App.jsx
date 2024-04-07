import Clock from "./Clock"
import React from "react";
import Container from "./Container";
import Colors from "./Colors";
import Counter from "./Counter";
import LoginForm from "./LoginForm";
import { createContext } from "react";
import SearchUser from "./SearchUser";

function App() {
  function handleLogin({ username, password }) {
    console.log(`You are logged as ${username}`);
    console.log(password);
  }


  return (
    <React.StrictMode>
    <Container title="My App!!">
      <Counter />
      <Clock />
      <LoginForm/>
      <SearchUser />
      <Colors
        colors={[
          { name: "Red", id: 1 },
          { name: "Blue", id: 2 },
          { name: "Green", id: 3 },
        ]}
      />
    </Container>
    </React.StrictMode>
  );
}

export default App;
