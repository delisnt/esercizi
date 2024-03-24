import AlertClock from "./AlertClock"
import Clock from "./Clock"
import Counter from "./Counter"
import Hello from "./Hello"
import Welcome  from "./Welcome"
import React from "react"
function App() {
  return (
    <div>
        <React.StrictMode>
        <Hello/>
        <Welcome name="John" age={18}/>
        <AlertClock/>
        <Counter/>          
        <Clock/>
        </React.StrictMode>

    </div>
  )
}

export default App