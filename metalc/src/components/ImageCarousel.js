import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageCarousel({ images }) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </Slider>
    );
  }
  
  export default ImageCarousel;
  
  
  
  