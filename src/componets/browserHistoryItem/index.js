import './index.css'

const BrowserHistoryItem = props => {
  const {historyDetails, updateFinalValue} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onclickDelete = () => {
    updateFinalValue(id)
  }

  return (
    <li className="container-history">
      <p className="timeAccessed">{timeAccessed}</p>
      <div className="midsection">
        <img src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button id="delete" onClick={onclickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-logo"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserHistoryItem
