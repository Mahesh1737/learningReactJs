import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './demo.jsx'

const anotherElement =(
  <a href="https://google.com" target="_blank">visite google</a>
)
//  console.log(anotherElement);

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "click me to visit google"
// }

const anotherUser = "Mahesh more"

const ReactElement =React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_black"
  },
  'click me to visit google',
  anotherUser
);

// console.log(typeof ReactElement);
createRoot(document.getElementById('root')).render(
  <>
    {/* {ReactElement} */}
    
    <App />
  </>
)
