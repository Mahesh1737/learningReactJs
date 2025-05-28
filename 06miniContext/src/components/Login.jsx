import React, { useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setusername] = useState(null);
    const [password, setPassword] = useState(null);
    const {setUser} = React.useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
        <input
        type="text"
        placeholder='username'
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        />
        <input
        type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login