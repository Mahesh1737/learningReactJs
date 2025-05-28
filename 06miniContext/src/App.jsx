import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>here we go for the react- context api</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
