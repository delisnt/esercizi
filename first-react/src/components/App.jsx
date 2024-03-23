import AlertClock from "./AlertClock"
import Counter from "./Counter"
import Hello from "./Hello"
import Welcome  from "./Welcome"
function App() {
  return (
    <div>
        <Hello/>
        <Welcome name="John" age={18}/>
        <AlertClock/>
        <Counter/>
    </div>
  )
}

export default App