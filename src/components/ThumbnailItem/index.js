import React from 'react'
import './index.css'

const ThumbnailItem = ({imageDetails: {id, thumbnailUrl}, updateScore}) => {

  const onClickHandle = () => updateScore(id)

  return (
    <li>
      <button type='button' className='thumbnail-button' onClick={onClickHandle}>
        <img className='thumbnail' src={thumbnailUrl} alt='thumbnail'/>
      </button>
    </li>
  )
}

export default ThumbnailItem