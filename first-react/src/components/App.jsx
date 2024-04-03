
import FocusableInput from "./FocusableInput";
import Clock from "./Clock"
import TodoList from "./TodoList";
import React from "react";
import Welcome from "./Welcome";
import Container from "./Container";
import Colors from "./Colors";

function App() {
  function handleLogin({ username, password }) {
    console.log(`You are logged as ${username}`);
    console.log(password);
  }

  return (
    <React.StrictMode>
    <Container title="My App!!">
      <Welcome name="Daniele" />
      <Clock />
      <TodoList />
      <FocusableInput />
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
