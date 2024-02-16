import React from 'react'

function Welcome() {
  return (
    <>
      <div className='flex flex-grow flex-col justify-center items-center h-screen bg-black text-white'>
        <div className='flex justify-center text-start'>
          <h1 className='text-3xl font-bold text-white t '>Hey <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400'>there!</span><br /> Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400'>ChatChit</span></h1>
        </div>
        <div className='flex justify-center py-2 flex-col items-center w-fit'>
          <p className='py-3 text-2xl'>Sign In to interact with your peers</p>
          <button className='bg-transparent bg-gradient-to-r from-purple-600 to-purple-400  py-3 w-full rounded-2xl font-bold text-xl'>Sign In</button>
        </div>
      </div>
    </>
  )
}

export default Welcome
