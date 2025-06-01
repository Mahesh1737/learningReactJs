##App.jsx (Component)

```

import { useEffect, useState } from 'react'
import './App.css'
import "tailwindcss";
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import {ThemeProvider} from './contexts/ThemeContext'



function App() {
  const [themeMode, setthemeMode] = useState("light")

  // const [darkMode, setdarkMode] = useState('')
  // const [lightMode, setlightMode] = useState('')

  const lightMode = () => {
    setthemeMode("light");
  }

  const darkMode = () => {
    setthemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App




```