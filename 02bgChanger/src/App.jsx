import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "tailwindcss";



function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-100"
      style={{
        backgroundColor: color
      }}
    >
      <h1 className="font-bold w-full flex justify-center py-5 text-3xl text-white size-6">
        Background Color Changer</h1>
      <div className="flex flex-grow justify-center">

        <div className="fixed flex flex-grow justify-center bottom-10 px-10 py-1 rounded-full m-3"
          style={{
            backgroundColor: 'white',
            // color:'black'
          }}
        >
          <div className="flex flex-wrap justify-center gap-10 px-2 py-2"
            style={{
              color: 'white'
            }}>
            <button
              onClick={() => setColor('red')}
              className="px-5 py-2 outline-none rounded-full shadow-xl"
              style={{
                backgroundColor: 'red'
              }}
            >
              Red
            </button>
            <button
              onClick={() => setColor('yellow')}
              className="px-3 py-2 outline-none rounded-full shadow-xl"
              style={{
                backgroundColor: 'yellow'
              }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor('blue')}
              className="px-3 py-2 outline-none rounded-full shadow-xl"
              style={{
                backgroundColor: 'blue'
              }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor('#212121')}
              className="px-3 py-2 outline-none rounded-full shadow-xl"
              style={{
                backgroundColor: '#212121'
              }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor('pink')}
              className="px-3 py-2 outline-none rounded-full shadow-xl"
              style={{
                backgroundColor: 'pink'
              }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor('green')}
              className="px-3 py-2 outline-none rounded-full shadow-xl"
              style={{
                backgroundColor: 'green'
              }}
            >
              Green
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App
