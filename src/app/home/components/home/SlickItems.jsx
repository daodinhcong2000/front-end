import Slick from '@ant-design/react-slick'

const SlickItems = (props) => {
  const { Item: ItemComponent, listItems, style, itemPerSlide = 5 } = props

  return (
    <Slick
      autoplay
      autoplaySpeed={3000}
      arrows={false}
      centerPadding="50px"
      pauseOnDotsHover
      infinite
      speed={300}
      slidesToShow={itemPerSlide}
      slidesToScroll={1}
      rows={1}
    >
      {listItems.map((item, index) => {
        return (
          <div style={style} key={index}>
            <ItemComponent item={item} />
          </div>
        )
      })}
    </Slick>
  )
}

export default SlickItems
