import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongCard = props => {
  const {songDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const removeFromList = () => {
    deleteSong(id)
  }

  return (
    <li className="song-card-container">
      <div className="song-card-left-container">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="text-container">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="button-container">
        <p>{duration}</p>
        <button
          type="button"
          onClick={removeFromList}
          className="delete-button"
          data-testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}

export default SongCard
