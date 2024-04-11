import Clock from "./Clock";
import React from "react";
import Container from "./Container";
import Colors from "./Colors";
import Counter from "./Counter";
import LoginForm from "./LoginForm";
import SearchUser from "./GitHubUsers";
import CurrentLocation from "./CurrentLocation";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  function handleLogin({ username, password }) {
    console.log(`You are logged as ${username}`);
    console.log(password);
  }

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <React.StrictMode>
      <Container title="My App!!">
        <Counter />
        <LanguageContext.Provider value={language}>
          <select name="language" onChange={(e) => {
            handleSetLanguage(e.target.value)
          }}>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
          <Clock />
        </LanguageContext.Provider>
        <LoginForm />
        <SearchUser />
        <CurrentLocation />
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
