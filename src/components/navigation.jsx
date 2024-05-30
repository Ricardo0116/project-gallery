import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



import 'bootstrap/dist/css/bootstrap.min.css';

import Lugar1 from './Lugar1';
import Lugar2 from './Lugar2';
import Lugar3 from './Lugar3';
import Lugar4 from './Lugar4';
import Lugar5 from './Lugar5';
import Lugar6 from './Lugar6';
import Lugar7 from './Lugar7';
import Lugar8 from './Lugar8';
import Lugar9 from './Lugar9';
import Lugar10 from './Lugar10';


const Navigation = () => {
  return (
    <div className='container-xl'>
      <h1 style={{textAlign: "center"}}>IMAGENES DE PAISAJE</h1>


       <Carousel slide={false}>

      <Carousel.Item>
        <Lugar1  text="First slide"/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar2 text="Second slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar3 text="Third slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar4 text="Fourth slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar5 text="Fifth slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar6 text="Sixth slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar7 text="Seventh slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar8 text="Eighth slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar9 text="Ninth slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Lugar10 text="Tenth slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>




    </Carousel>
    </div>
  )
}

export default Navigation
