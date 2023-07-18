import React from 'react'
import './index.css'

const NavBar = ({score, timeRemainingInSec}) => {

  return (
    <header>
      <nav>
        <img src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png' alt='website logo' className='logo'/>
        <ul className='nav-items'>
          <li className='nav-item'>
            <p>Score:</p>
            <p className='score-count'>{score}</p>
          </li>
          <li className='nav-item'>
            <img src='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png' alt='timer' className='timer-icon'/>
            <p className='timeout'>{timeRemainingInSec} Sec</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar