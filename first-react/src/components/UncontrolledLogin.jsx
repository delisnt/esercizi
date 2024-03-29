import React from 'react'

function UncontrolledLogin() {
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get('username')
        const password = formData.get('password')
        const checkbox = formData.get('checkbox') === 'on' ? true : false
        const userData = {
            username,
            password,
            checkbox
        }
        console.log(`i tuoi dati: `, userData);
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Uncontrolled Login</h1>
        <input type="text" name='username' placeholder='username'/>
        <input type="text" name='password'placeholder='password'/>
        <input type="checkbox" name='checkbox'/>
        <button>Submit</button>
    </form>
  )
}

export default UncontrolledLogin