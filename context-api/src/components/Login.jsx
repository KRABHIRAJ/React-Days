import { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({email, password});
        setEmail('');
        setPassword('');
    }
  return (
    <div>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login