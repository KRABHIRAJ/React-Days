import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Home() {
    const {user} = useContext(UserContext);
    if(user.email.length > 0){
        return <div>Welcome {user.email}</div>
    }
    return <div>Not logged in....</div>
}

export default Home