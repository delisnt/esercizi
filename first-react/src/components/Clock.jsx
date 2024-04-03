import React, { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

function Clock() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(e) {
    setLanguage(e.target.value);
    console.log(language);
  }

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <LanguageContext.Provider>
      <div className="clock">
        <select name="language" onChange={handleSetLanguage}>
            <option value="en">EN</option>
            <option value="it">IT</option>
        </select>
        <h2>
          {language === "en"
            ? `Current Time:`
            : "Ora attuale:"}
        </h2>
        <h3>{date.toLocaleTimeString()}</h3>
      </div>
    </LanguageContext.Provider>
  );
}

export default Clock;
