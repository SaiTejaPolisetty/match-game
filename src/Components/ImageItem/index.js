import './index.css'

const ImageItem = props => {
  const {imageDetails, selectImageFunc} = props
  const {id, thumbnailUrl} = imageDetails

  const callSelectImage = () => {
    selectImageFunc(id)
  }

  return (
    <li className="image-item">
      <button className="thumbline-btn" type="button" onClick={callSelectImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbline-img" />
      </button>
    </li>
  )
}

export default ImageItem
