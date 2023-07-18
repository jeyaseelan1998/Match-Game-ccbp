import { Component } from "react";

import NavBar from '../NavBar' 
import TabList from '../TabItem'
import ThumbnailItem from "../ThumbnailItem"
import ScoreCard from "../ScoreCard";

import './index.css'

const timeoutInSec = 60;

class MatchGameHome extends Component {
  state = {
    timeElapsedInSec: 0,
    activeTabId: this.props.tabsList[0].tabId,
    imageDetails: this.props.imagesList[0],
    isGameFinished: false,
    score: 0
  }

  componentDidMount() {
    this.onGameStart()
  }

  onIncreaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  onCorrectAnswer = () => {
    const {imagesList} = this.props
    const randomNumber = Math.floor(Math.random() * imagesList.length)
    this.onIncreaseScore()
    this.setState({imageDetails: imagesList[randomNumber]})
  }

  onWrongAnswer = () => {
    this.clearTimeInterval()
    this.setState({isGameFinished: true})
  }

  clearTimeInterval = () => {
    this.timerId = clearInterval(this.timerId)
  }

  onIncreaseTimeElapsedInSec = () => {
    const {timeElapsedInSec} = this.state
    const isTimeout = timeElapsedInSec === timeoutInSec
    if(isTimeout) {
      this.clearTimeInterval()
      this.setState({isGameFinished: true})
    } else {
      this.setState(prevState => ({timeElapsedInSec: prevState.timeElapsedInSec + 1}))
    }
  }

  onGameStart = () => {
    this.timerId = setInterval(this.onIncreaseTimeElapsedInSec, 1000)
  }

  getTimeRemainingInSec = () => {
    const {timeElapsedInSec} = this.state
    const timeRemainingInSec = timeoutInSec - timeElapsedInSec
    return timeRemainingInSec
  }

  updateActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  updateScore = id => {
    const {imageDetails} = this.state
    if(imageDetails.id === id) {
      this.onCorrectAnswer()
    }
    else {
      this.onWrongAnswer()
    }
  }

  onPlayAgain = () => {
    this.setState({timeElapsedInSec: 0, isGameFinished: false, score: 0})
    this.onGameStart()
  }

  getFilteredThumbnails = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    const filteredThumbnails = imagesList.filter(eachImage => eachImage.category === activeTabId)
    return filteredThumbnails
  }

  render() {
    const {activeTabId, imageDetails, score, isGameFinished} = this.state
    const {tabsList} = this.props

    const filteredThumbnails = this.getFilteredThumbnails()

    return (
      <div className="match-game-home-container">
        <NavBar score={score} timeRemainingInSec={this.getTimeRemainingInSec()}/>
        {
          !isGameFinished ? (
            <div className="match-game-body-container">
              <img src={imageDetails.imageUrl} alt="match" className="big-image"/>
              <ul className="tabs-list">
                {
                  tabsList.map(tabItem => <TabList key={tabItem.tabId} tabDetails={tabItem} isActiveTab={activeTabId === tabItem.tabId} updateActiveTabId={this.updateActiveTabId}/>)
                }
              </ul>

              <ul className="thumbnails-list">
                {
                  filteredThumbnails.map(eachImage => <ThumbnailItem key={eachImage.id} imageDetails={eachImage} updateScore={this.updateScore}/>)
                }
              </ul>
            </div>
          ) : (
            <ScoreCard score={score} onPlayAgain={this.onPlayAgain}/>
          )
        }
      </div>
    )
  }
}

export default MatchGameHome