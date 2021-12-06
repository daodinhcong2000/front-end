import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Button } from 'antd'
import { _search } from '../../../../redux/actions/searchActions'

const SearchItem = (image, title, setFilter) => {
  const dispatch = useDispatch()
  const { limit, sort } = useSelector((state) => state.search)

  const handleClick = (e) => {
    document.getElementById('inp_headerSearch').value = title
    setFilter(title)
    dispatch(_search(title, 1, limit, sort))
  }

  return (
    <Button
      type="text"
      style={{ color: '#fff', textAlign: 'center', verticalAlign: 'baseline' }}
      onClick={handleClick}
      icon={<Image src={image} style={{ width: '25px', height: '25px' }} preview={false} />}
    >
      <div>{title}</div>
    </Button>
  )
}

export default SearchItem
