"use client";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import {FaMoon} from "react-icons/fa";


function ThemeToggle() {
    const [darkMode, setDarkMode] =useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme === "dark") setDarkMode(true)
    },[])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","light")
        }
    },[darkMode])
  return (
    <div className="relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 bg-gray-500 dark:bg-gray-700 mr-1" onClick={() => setDarkMode(!darkMode)}>
        <FaMoon className="text-white" size={18}/>
        <div className="absolute bg-white dark:bg-purple-500 e-6 -6 rounded-full shadow-md transform transition-transform duration-300 " 
        style={
            darkMode? {BsSunFill} : {FaMoon}
            }></div>
        <BsSunFill
        className="ml-auto text-yellow-300" size={18}/>

    </div>
  )
}

export default ThemeToggle