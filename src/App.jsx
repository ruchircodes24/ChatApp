import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ChatBox from './components/ChatBox'
import Welcome from './components/Welcome'
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


function App() {
  const [user] = useAuthState(auth)
  
  return (
    <>
      <NavBar />
      {user ? <ChatBox /> : <Welcome />}
    </>
  )
}

export default App
