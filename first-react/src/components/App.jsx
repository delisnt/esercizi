import AlertClock from "./AlertClock"
import Hello from "./Hello"
import Welcome  from "./Welcome"
function App() {
  return (
    <div>
        <Hello/>
        <Welcome name="John" age={18}/>
        <AlertClock/>
    </div>
  )
}

export default App