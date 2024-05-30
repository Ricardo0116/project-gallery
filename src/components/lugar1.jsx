import React from "react"
import Image from 'react-bootstrap/Image';
import lugar1s from "../images/lugar1.jpeg"

const Lugar1 = () => {
    return (
        <div>
            <Image src={lugar1s} alt="Lugares para ir" height={850} width={1300}/>
        </div>
    )
}

export default Lugar1