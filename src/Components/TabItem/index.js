import './index.css'

const TabItem = props => {
  const {tabItemDetails, selectTabFunc, selectedTab} = props
  const {tabId, displayText} = tabItemDetails

  const callSelectTabFunc = () => {
    selectTabFunc(tabId)
  }
  const selectedTabStyle = tabId === selectedTab ? 'selectedTabStyle' : ''

  return (
    <li className="tabItem">
      <button
        className={`tab-btn ${selectedTabStyle}`}
        onClick={callSelectTabFunc}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
