import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../image/1.jpg";
import img2 from "../../image/2.jpg";
import img3 from "../../image/3.jpg";

import "./Carrossel.css"

function Carrosel() {
  return (
    <div className='carrosel-div'> 
    <Carousel>
      <Carousel.Item>
        <img
          className = 'carrosel img-fluid'
          src={img1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrosel img-fluid"
          src={img2}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrosel img-fluid"
          src={img3}
        />

      </Carousel.Item>
    </Carousel>
    </div> 
  );
}

export default Carrosel;