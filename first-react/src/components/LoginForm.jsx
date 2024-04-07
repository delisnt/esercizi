import  { useState } from 'react';
import useHandleLogin from './useHandleLogin';


function LoginForm() {

    const {data, onHandleSubmit, onInputChange} = useHandleLogin()

    return (
        <form onSubmit={onHandleSubmit}>
            <div>
                <input 
                    type="text" 
                    name="username" 
                    value={data.username} 
                    onChange={onInputChange} 
                    placeholder="Username" 
                />
            </div>
            <div>
                <input 
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={onInputChange} 
                    placeholder="Password" 
                />
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="session" 
                        checked={data.session} 
                        onChange={onInputChange} 
                    />
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;