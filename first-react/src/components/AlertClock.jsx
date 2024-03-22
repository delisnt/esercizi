import Button from "./Button"


function AlertClock() {
    function handleClock() {
        const time = new Date()
        alert(`The time is ${time.toLocaleTimeString()}`)
    }
  return (
    <div>
        <Button onClick={handleClock} label="Click me!"/>
    </div>
  )
}

export default AlertClock