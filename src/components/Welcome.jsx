import React from 'react'

function Welcome() {
  return (
    <>
        <div className='flex flex-col justify-center h-screen bg-gray-700'>
            <h1 className='text-3xl font-bold'>Hey there! Welcome to ChatChit</h1>
            <p>Sign In to interact with your peers</p>
            <button>Sign In</button>
        </div>
    </>
  )
}

export default Welcome
