import React from 'react'

function card(username, btntext) {
    console.log(username);
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
        
          src="https://images.pexels.com/photos/16075343/pexels-photo-16075343/free-photo-of-handmade-dolls-and-football-world-cup-trophy.jpeg?auto=compress&cs=tinysrgb&w=200"
          alt=""
          className="object-cover object-center w-full rounded-md h-75 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            lorem here as it is
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button>{btntext || "click me"}</button>
      </div>
      </>
  )
}

export default card