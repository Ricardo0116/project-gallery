import React from 'react'
import { Link } from 'react-router-dom';


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
    <div className='container-center mt-4 father'>
      <Link to="/lugar1" className="links">
          <figure className="image-size">
          <Lugar1 />
          <figcaption>lugar1</figcaption>
        </figure>
      </Link>

        <Link to="/lugar2" className="links">
          <figure className="image-size">
          <Lugar2 />
          <figcaption>lugar2</figcaption>
        </figure>
      </Link>


      <Link to="/lugar3" className="links">
        <figure className="image-size">
          <Lugar3 />
          <figcaption>lugar3</figcaption>
        </figure>
      </Link>

      <Link to="/lugar4" className="links">
        <figure className="image-size">
          <Lugar4 />
          <figcaption>lugar4</figcaption>
        </figure>
      </Link>

     <Link to="/lugar5" className="links">
        <figure className="image-size">
          <Lugar5 />
          <figcaption>lugar5</figcaption>
        </figure>
      </Link>

      <Link to="/lugar6" className="links">
        <figure className="image-size">
          <Lugar6 />
          <figcaption>lugar6</figcaption>
        </figure>
      </Link>

      <Link to="/lugar7" className="links">
        <figure className="image-size">
          <Lugar7 />
          <figcaption>lugar7</figcaption>
        </figure>
      </Link>

      <Link to="/lugar8" className="links">
        <figure className="image-size">
          <Lugar8 />
          <figcaption>lugar8</figcaption>
        </figure>
      </Link>

      <Link to="/lugar9" className="links">
        <figure className="image-size">
          <Lugar9 />
          <figcaption>lugar9</figcaption>
        </figure>
      </Link>

      <Link to="/lugar10" className="links">
        <figure className="image-size">
          <Lugar10 />
          <figcaption>lugar10</figcaption>
        </figure>
      </Link>


     
    </div>
  )
}

export default Navigation
