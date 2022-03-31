import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./Components.css"
import {Contactme} from "../data/data" 

const RedesSociales = () => {
  const {facebook, googleMaps, instagram, whatsapp} = Contactme
  return (
    <div>
        <div className="redes" >
          <a target={'_blank'} href={instagram}> <FontAwesomeIcon icon={faInstagram} size="2x"  border className='sociales'/> </a>
          <a target={'_blank'} href={facebook}> <FontAwesomeIcon icon={faFacebookF} size="2x"  border className='sociales'/> </a>
          <a target={'_blank'} href={whatsapp}> <FontAwesomeIcon icon={faWhatsapp} size="2x" border className='sociales'/> </a>
          <a target={'_blank'} href={googleMaps}> <FontAwesomeIcon icon={faMapLocationDot} size="2x" border className='sociales'/> </a>
        </div>
    </div>

  )
}

export default RedesSociales