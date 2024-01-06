// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetail, isTabActive, myThumbNail} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetail
  const thumbnailActive = () => {
    myThumbNail(thumbnailUrl)
  }
  console.log(id)
  const activeTab = isTabActive ? 'myactiveTab' : ''

  return (
    <li className="thumbnail_Items_container">
      <button
        onClick={thumbnailActive}
        type="button"
        className={`thumbnail_button `}
      >
        <img
          className={`thumbnail_images ${activeTab}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
