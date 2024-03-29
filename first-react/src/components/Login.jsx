import  { useState } from 'react'

function createData() {
    
    return {
        username: '', 
        password: '',
        session: false
    }
}

function Login( {onLogin }) {
    const [data, setData] = useState(createData())
    let username = data.username
    let password = data.password
    function handleInputChange(e) {
        const { name, value, type, checked } = e.target;

        setData((d) => {
            return {...d,
            [name]: type === 'checkbox' ? checked : value
        }
        })
    }

    function resetData() {
        setData(createData())
    }

    function handleLogin() {
        onLogin({username, password})
    }

    
  return (
    <div>
        <h2>Effettua il login</h2>
        <input type="text" name="username" value={data.username} onChange={handleInputChange} />
        <input type="password" name="password" value={data.password} onChange={handleInputChange}/>
        <input type="checkbox" name="session" checked={data.session} onChange={handleInputChange} />
        <button onClick={resetData}>RESET</button>
        <button disabled={!data.username || !data.password} id='login' onClick={handleLogin}>LOGIN</button>
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    </div>
  )
}

export default Login