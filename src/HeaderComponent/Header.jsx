import React from 'react'
import DarkMode from './DarkMode'
import Title from './Title'
const Header = () => {
  return (
    <div className="header">
      <Title />
      <DarkMode />
    </div>
  )
}

export default Header