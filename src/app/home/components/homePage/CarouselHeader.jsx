import { Carousel, Image } from 'antd'

const CarouselHeader = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000} style={{ margin: '15px' }}>
      <div>
        <Image src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50" />
      </div>
      <div>
        <Image src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50" />
      </div>
      <div>
        <Image src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" />
      </div>
      <div>
        <Image src="https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50" />
      </div>
    </Carousel>
  )
}

export default CarouselHeader
