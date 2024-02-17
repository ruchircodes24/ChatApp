import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import SendMessage from './SendMessage'
import Message from './Message'
function ChatBox() {
  const [messages, setMessages] = useState([])
  const scroll = useRef()
  useEffect(() => {
    const q = query(
      collection(db, 'messages'), orderBy('createAt', 'desc'),
      limit(50)
    )

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = []
      QuerySnapshot.forEach(doc => {
        fetchedMessages.push({ ...doc.data(), id: doc.id })
      })
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt)
      setMessages(sortedMessages)
    })
    return () => unsubscribe
  }, [])
  return (
    <main className='chat-box'>
      <div className='messages-wrapper'>
        {messages?.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>)
}


export default ChatBox
