import Age from "./Age"

function Welcome(props) {
  return (
    <div>
    <p>Welcome, {props.name}!</p>  
    {Age >= 18 && <Age age={props.age}/>}    
    {Boolean(Age) && <Age age={props.age}/>}    
    {(props.age >= 18 && props.age <= 65) && <Age age={props.age}/>}       
    {(props.name === "John" && props.age >= 18 && props.age <= 65) && <Age age={props.age}/>}       
    </div>

  )
}

export default Welcome