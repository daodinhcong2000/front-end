import { Image } from 'antd'
import { useState } from 'react'

const SearchItem = (image, title) => {
    const [size, setSize] = useState('2em')
    const [hidden, setHidden] = useState(false)

    const handleClick = e => {

    }

    const handleMouseOver = e => {
        setSize('3em')
        setHidden(true)
    }
    const handleMouseOut = e => {
        setSize('2em')
        setHidden(false)
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}
            style={{ color: '#fff', textAlign: 'center', verticalAlign: 'baseline' }}
            onClick={handleClick}
        >
            <Image src={image} style={{ width: size, height: size }} preview={false} />
            {!hidden && <div>{title}</div>}
        </div>
    )
}

export default SearchItem