import { useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";


function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMasdfghjklqwertyuiopzxcvbnm";
    let num ="1234567890";
    let specChar ="<,>.?/|\+=_-)(*&^%$#@!~";

    if(charAllowed) str+=specChar;
    if(numberAllowed) str+=num;
    console.log(str);

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length, charAllowed, numberAllowed, setPassword]);

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  })

  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed, passwordGenerator])



  return (
    <div className="w-full max-w-lg text-center  text-white mx-auto my-6 py-2 bg-amber-300 rounded-lg shadow-blue-50 shadow-md">
      <h1 className="text-3xl font-bold mt-3 mb-8">Password Generator</h1>
      <div className="flex flex-wrap rounded-lg gap-x-6 my-3 justify-center py-0.5 ">
        <input
         type="text"
         value={password}
         id="ipPassword"
         readOnly
         placeholder='Password'
         className="pl-3 w-80 rounded-lg py-1.5 outline-none"
         ref={passwordRef}
         style={{
          backgroundColor:'white',
          color:'black'
         }}
        />
        <button
        onClick={copyPasswordToClip}
        className="bg-blue-500 px-3 py-2 rounded-lg hover:opacity-75"
        >
        Copy
        </button>
      </div>
      <div className="flex flex-wrap my-3 mx-5 gap-x-3" >
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className=""
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label className="mx-2 my-3 text-shadow-white">Length:{length}</label>
        <div className="flex flex-wrap items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          id="charInput"
          />
          <label htmlFor="charInput">CharAllowed</label>
        </div>
        <div className="flex flex-wrap items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}
          id="numberInput"
          />
          <label htmlFor="numberInput">NumAllowed</label>
        </div>
      </div>

    </div>
  )
}

export default App
