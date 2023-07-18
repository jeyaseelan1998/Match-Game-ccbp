import './index.css'
import React from 'react'

const ScoreCard = ({score, onPlayAgain}) => {
  const onClickHandler = () => onPlayAgain()
  return (
    <div className='score-card-bg-container'>
      <div className='score-card-container'>
        <img alt='trophy' src='https://assets.ccbp.in/frontend/react-js/match-game-trophy.png' className='trophy-image'/>
        <p className='score-card-text '>YOUR SCORE</p>
        <p className='score-card-score'>{score}</p>
        <button className='play-again-button' type='button' onClick={onClickHandler}>
          <img alt='reset' src='https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png' className='play-again-icon'/>
          <p className='score-card-text'>PLAY AGAIN</p>
        </button>
      </div>

    </div>
  )
}

export default ScoreCard