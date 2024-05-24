import React from 'react'
import { Link } from 'react-router-dom';
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
    <div>
      <Link to="/lugar1">
        <figure>
          <Lugar1 />
          <figcaption>lugar1</figcaption>
        </figure>
      </Link>

      <Link to="/lugar2">
        <figure>
          <Lugar2 />
          <figcaption>lugar2</figcaption>
        </figure>
      </Link>

      <Link to="/lugar3">
        <figure>
          <Lugar3 />
          <figcaption>lugar3</figcaption>
        </figure>
      </Link>

      <Link to="/lugar4">
        <figure>
          <Lugar4 />
          <figcaption>lugar4</figcaption>
        </figure>
      </Link>

     <Link to="/lugar5">
        <figure>
          <Lugar5 />
          <figcaption>lugar5</figcaption>
        </figure>
      </Link>

      <Link to="/lugar6">
        <figure>
          <Lugar6 />
          <figcaption>lugar6</figcaption>
        </figure>
      </Link>

      <Link to="/lugar7">
        <figure>
          <Lugar7 />
          <figcaption>lugar7</figcaption>
        </figure>
      </Link>

      <Link to="/lugar8">
        <figure>
          <Lugar8 />
          <figcaption>lugar8</figcaption>
        </figure>
      </Link>

      <Link to="/lugar9">
        <figure>
          <Lugar9 />
          <figcaption>lugar9</figcaption>
        </figure>
      </Link>

      <Link to="/lugar10">
        <figure>
          <Lugar10 />
          <figcaption>lugar10</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Navigation