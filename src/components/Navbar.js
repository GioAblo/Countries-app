import { useEffect, useState } from "react"
import darkMoon from "../assets/dark-moon.png"
import lightMoon from "../assets/light-moon.png"

export const Navbar = () => {
    const [mode, setMode] = useState(false);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", 'light')
      }
    
      const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", 'dark')
      }
    
      const togleTheme =() => {
        if (!mode) setDarkMode()
        else setLightMode()  
      }
    
      useEffect(() => {
        togleTheme()
      }, [mode]) 
    

  return (
    <nav className='Nav flex justify-between sticky top-0 bottom-0 left-0 right-0 z-10 px-3 py-6 md:px-14 md:py-9'>
        <h2 className='font-bold md:font-extrabold  md:text-3xl'>Where in the world?</h2>

        <button className='items-center flex gap-3 md:text-xl md:font-semibold' onClick={() => setMode(!mode)}>
          {mode ? <img className='w-[17px]' style={{filter: "invert(1)"}} src={darkMoon} alt='dark-mode' /> : <img className='w-[17px]' src={lightMoon} alt='light-mode' />}
          Dark Mode
        </button>
    </nav>
  )
}
