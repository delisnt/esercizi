import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Clock() {
  const language = useContext(LanguageContext)

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
      <div className="clock">
        <h2>
          {language === "en"
            ? `Current Time:`
            : "Ora attuale:"}
        </h2>
        <h3>{date.toLocaleTimeString()}</h3>
      </div>
  );
}

export default Clock;
