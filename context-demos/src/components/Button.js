import React from 'react'
import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme,setTheme}= useTheme()
    
  return (
    
    <div>Active Theme:  {theme}
    
    
    <br />
    <br />
    <button onClick={()=>setTheme(theme==="Light" ? "Dark": "Light")}>Change Theme</button>
    </div>
  )
}

export default Button