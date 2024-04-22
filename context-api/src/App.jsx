import Home from './components/Home'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API Basic</h1>
      <Login />
      <Home />
    </UserContextProvider>
  )
}

export default App
