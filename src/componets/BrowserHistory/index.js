import {Component} from 'react'

import './index.css'

import BrowserHistoryItem from '../browserHistoryItem/index'

class BrowserHistory extends Component {
  state = {
    seacrhInput: initialHistoryList,
  }

  updateFinalValue = id => {
    const {seacrhInput} = this.state
    const newbrowserList = seacrhInput.filter(eachItem => eachItem.id !== id)
    console.log('kk')
    this.setState({seacrhInput: newbrowserList})
  }

  onChangeSearchInput = Event => {
    const {seacrhInput} = this.state
    this.setState({seacrhInput: Event.target.value.toLowerCase()})
    console.log(seacrhInput)
  }

  render() {
    const {seacrhInput} = this.state
    const {initialHistoryList} = this.props
    const searcResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(seacrhInput),
    )
    return (
      <div className="browser-container">
        <div className="input-history-container">
          <img
            className="bowser-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-Container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="Search"
              placeholder="Search History"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="browser-history-container">
          {searcResults.map(eachItem => (
            <BrowserHistoryItem
              historyDetails={eachItem}
              key={eachItem.id}
              updateFinalValue={this.updateFinalValue}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default BrowserHistory
