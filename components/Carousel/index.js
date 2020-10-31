import { Carousel } from 'react-bootstrap'

const roofImages01 = `https://www.tamko.com/images/default-source/home-banner/colors-of-nature---rustic-redwood.jpg?sfvrsn=c9555da0_10`
const roofImages02 = `https://www.tamko.com/images/default-source/home-banner/colors-of-nature---glacier-white.jpg?sfvrsn=31555da0_10`
const roofImages03 = `https://www.tamko.com/images/default-source/home-banner/colors-of-nature---weathered-wood.jpg?sfvrsn=cd555da0_10`


const CarouselDisplay = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={roofImages01}
          alt="First slide"
          style={{height: '482px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={roofImages02}
          alt="First slide"
          style={{height: '482px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={roofImages03}
          alt="First slide"
          style={{height: '482px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselDisplay