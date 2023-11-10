import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselImg1 from '../../assets/home/01.jpg'
import carouselImg2 from '../../assets/home/02.jpg'
import carouselImg3 from '../../assets/home/03.png'
import carouselImg4 from '../../assets/home/04.jpg'
import carouselImg5 from '../../assets/home/05.png'
import carouselImg6 from '../../assets/home/06.png'

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} showArrows={false} >
        <div>
          <img className="max-h-[90vh] w-full object-cover" src={carouselImg1} />
        </div>
        <div>
          <img className="max-h-[90vh] w-full object-cover" src={carouselImg2} />
        </div>
        <div>
          <img className="max-h-[90vh] w-full object-cover" src={carouselImg3} />
        </div>
        <div>
          <img className="max-h-[90vh] w-full object-cover" src={carouselImg4} />
        </div>
        <div>
          <img className="max-h-[90vh] w-full object-cover" src={carouselImg5} />
        </div>
        <div>
          <img className="max-h-[90vh] w-full object-cover" src={carouselImg6} />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
