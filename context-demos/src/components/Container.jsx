import React from 'react'
import Button from './Button'
import Header from './Header'
import {useTheme} from '../context/ThemeContext'
import Profiles from './Profiles'
import  UserContext  from '../context/UserContext'

function Container() {
    const {theme}= useTheme()
  return (
    <div className={`app ${theme}`}>
    <Button />
      <Header />
      <hr />
      <Profiles />
    </div>
  )
}

export default Container