import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel variant="dark" style={{height: '100%', display:'flex', flexDirection:'column'}} >
      <Carousel.Item  style={{height: '400px'}}>
        <img
          src="https://aluminioindustrial.mx/blog/wp-content/uploads/2019/09/perfiles-aluminio-varios.jpg"
          alt="First slide"
          style={{ border: 'solid 3pt green', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height: '400px', boxSizing:'inherit'}}>
        <img      
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4rF_6ZqA0PtDxX9G8iENwAlR9zGaQUO6VA&usqp=CAU"
          alt="Second slide"
          style={{ border: 'solid 3pt green', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          src="https://i.blogs.es/14d603/cobre1/1366_2000.jpeg"
          alt="Third slide"
          style={{ border: 'solid 3pt green', objectFit: 'contain'}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;