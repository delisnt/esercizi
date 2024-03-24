

function MouseClicker() {
    function handleButtonClick(event) {
        if (event.target.src){
        console.log(event.target.src);
        } else {
            console.log(event.target)
        }
    }

  return (
    <div>
    <button onClick={handleButtonClick} name='one'>
        <img src="#" width={24} height={24} />
        Click me!</button>
    <button onClick={handleButtonClick} name='two'>Click me!</button>
    </div>
  )
}

export default MouseClicker