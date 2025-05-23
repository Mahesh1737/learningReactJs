import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  // const newCounter = ()=>{
  //   if(counter<20){
  //     counter = counter+1;
  //     setCounter(counter);
  //     console.log("new random value : ",Math.random());
  //     console.log("counter : ",counter);
  //   }
  // }

  const newCounter = ()=>{
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }


  const removeCounter = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={newCounter}>Add value{counter}</button><br/><br/> 
      <button onClick={removeCounter}>Remove value{counter}</button>

    </>
  )
}

export default App
