import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function SendMessage() {
    const [message, setMessage] = useState('')

    return (
        <>
            <div>
                <form className='send-message'>
                    <label htmlFor="messageInput" hidden>Type your message</label>
                    <input type="text" id='messageInput' name='messageInput'
                        placeholder='Type your message...'
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                </form>
                <button type='submit'>Send</button>
            </div>
        </>
    )
}
const sendMessage = async (event) => {
    event.preventDefault()
    if (message.trim() === '') {
        alert('Enter a message')
        return
    }
    const { userId, displayName, photoURL } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createAt: serverTimestamp(),
        userId
    })

    return (
        <form onSubmit={(event) => sendMessage(event)} className='send-message'></form>
    )
}
export default SendMessage
