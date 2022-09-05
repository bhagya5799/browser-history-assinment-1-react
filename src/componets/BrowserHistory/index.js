import {Component} from 'react'

import './index.css'

import BrowserHistoryItem from '../browserHistoryItem/index'

class BrowserHistory extends Component {
  state = {
    seacrhInput: '',
  }

  onChangeSearchInput = event => {
    const {seacrhInput} = this.state
    this.setState({seacrhInput: event.target.value})
    console.log(seacrhInput)
  }

  render() {
    const {seacrhInput} = this.state
    const {initialHistoryList} = this.props
    const searcResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(seacrhInput.toLowerCase()),
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
          {initialHistoryList.map(eachItem => (
            <BrowserHistoryItem historyDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BrowserHistory
