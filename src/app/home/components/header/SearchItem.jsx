import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'antd'
import { _search } from '../../../../redux/actions/searchActions'

const SearchItem = (image, title, setFilter) => {
  const dispatch = useDispatch()
  const [size, setSize] = useState('2em')
  const [hidden, setHidden] = useState(false)
  const { limit, sort } = useSelector((state) => state.search)

  const handleClick = (e) => {
    document.getElementById('inp_headerSearch').value = title
    setFilter(title)
    dispatch(_search(title, 1, limit, sort))
  }

  const handleMouseOver = (e) => {
    setSize('3em')
    setHidden(true)
  }
  const handleMouseOut = (e) => {
    setSize('2em')
    setHidden(false)
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ color: '#fff', textAlign: 'center', verticalAlign: 'baseline' }}
      onClick={handleClick}
    >
      <Image src={image} style={{ width: size, height: size }} preview={false} />
      {!hidden && <div>{title}</div>}
    </div>
  )
}

export default SearchItem
