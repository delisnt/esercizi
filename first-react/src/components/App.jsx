import Hello from "./Hello"
import Welcome  from "./Welcome"
function App() {
  return (
    <div>
        <Hello/>
        <Welcome name="John" age={18}/>
    </div>
  )
}

export default App