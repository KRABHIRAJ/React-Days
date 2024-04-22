import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const setDarkMode = () => {
    setThemeMode('dark');
  }

  const setLightMode = () => {
    setThemeMode('light');
  }

  useEffect(() => {
    const htmlDom = document.querySelector('html').classList;
    htmlDom.remove('light', 'dark');
    htmlDom.add(themeMode);
  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode, setDarkMode, setLightMode}}>
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
  </ThemeContextProvider>
  )
}

export default App
