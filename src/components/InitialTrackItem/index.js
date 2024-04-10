import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const InitialTrackItem = props => {
  const {details, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = details

  const onDelete = () => {
    deleteSong(id)
  }
  return (
    <div>
      <li className='items'>
        <div className='items1'>
          <img className='image' src={imageUrl} />
          <div>
            <h1 className='item-head'>{name}</h1>
            <p className='item-para'>{genre}</p>
          </div>
        </div>
        <div className='items2'>
          <p className='item-para'>{duration}</p>
          <button
            data-testid='delete'
            onClick={onDelete}
            type='button'
            className='btn'
          >
            <AiOutlineDelete size={30} />
          </button>
        </div>
      </li>
    </div>
  )
}
export default InitialTrackItem
