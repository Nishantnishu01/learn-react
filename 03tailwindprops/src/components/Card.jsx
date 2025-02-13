import React from 'react'

function card({username, btnText="Attack me"}) {

    
  return (
    <div className='max-w-xs p-6 rounded-md shadow-md bg-black'>
        <img
          src="https://plus.unsplash.com/premium_photo-1682023586579-e38ca10343e5?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
      {btnText}
        </p>
      </div>
  )
}

export default card