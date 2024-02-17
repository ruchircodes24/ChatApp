import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
function Message(message) {
    const [user] = useAuthState(auth)
    
  return (
    <div className={`chat-bubble ${message.userId === user.userId ? 'right' : ''}`}>
        <img src={message.avatar}
        className='chat-bubble_left' alt="user avatar" />
        <div className='chat-bubble_right'>
            <p className='user-name'>{message.name}</p>
            <p className='user-message'>{message.text} </p>
        </div>
    </div>
  )
}

export default Message
