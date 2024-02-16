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
    <div className='flex flex-col h-screen'>
      <NavBar />
      {user ? <ChatBox /> : <Welcome />}
    </div>
      
    </>
  )
}

export default App
