import React from 'react'

import './index.css'

const TabItem = ({ tabDetails: {tabId, displayText}, isActiveTab, updateActiveTabId }) => {

  const onClickHandle = () => updateActiveTabId(tabId)

  return (
    <li className='tab-item-container'>
      <button className={`tab-button ${isActiveTab ? 'active-tab' : ''}`} type='button' onClick={onClickHandle}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem