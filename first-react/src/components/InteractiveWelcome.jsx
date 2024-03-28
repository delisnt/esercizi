import React, { useState } from 'react'
import Welcome from './Welcome'


function InteractiveWelcome() {
    const [data, setData] = useState('')

    function handleInputChange(e) {
        const username = e.target.value
        setData(username)
    }

    console.log(data);

  return (
    <div>
        <h1>Form!</h1>
        <input name="username" type="text" onChange={handleInputChange} />
        <Welcome name={data}/>
    </div>
  )
}

export default InteractiveWelcome