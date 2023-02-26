import ImageItem from '../ImageItem'

import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

const MatchGameBody = props => {
  const {
    filteredThumbnails,
    selectTabFunc,
    selectImageFunc,
    gameDetails,
  } = props
  const {imgToSelect, selectedTab} = gameDetails

  const renderTabs = () => {
    const renderedTabs = tabsList.map(obj => (
      <TabItem
        tabItemDetails={obj}
        selectTabFunc={selectTabFunc}
        selectedTab={selectedTab}
        key={obj.tabId}
      />
    ))

    return renderedTabs
  }

  const renderThumbnails = () => {
    const renderedImageItems = filteredThumbnails.map(obj => (
      <ImageItem
        imageDetails={obj}
        selectImageFunc={selectImageFunc}
        key={obj.id}
      />
    ))
    return renderedImageItems
  }

  return (
    <>
      <div className="game-body">
        <div className="big-image-container">
          <img src={imgToSelect.imageUrl} alt="match" className="big-img" />
        </div>

        <ul className="tab-item-container">{renderTabs()}</ul>
        <ul className="thumbline-container">{renderThumbnails()}</ul>
      </div>
    </>
  )
}
export default MatchGameBody
