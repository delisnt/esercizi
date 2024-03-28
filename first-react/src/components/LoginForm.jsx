import React, { useState } from 'react';

function createData() {
    return {
        username: '', 
        password: '',
        session: false
    };
}

function LoginFormData() {
    const [data, setData] = useState(createData());

    function handleInputChange(e) {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setData((prevData) => ({
            ...prevData,
            [name]: inputValue
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    name="username" 
                    value={data.username} 
                    onChange={handleInputChange} 
                    placeholder="Username" 
                />
            </div>
            <div>
                <input 
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={handleInputChange} 
                    placeholder="Password" 
                />
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="session" 
                        checked={data.session} 
                        onChange={handleInputChange} 
                    />
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginFormData;