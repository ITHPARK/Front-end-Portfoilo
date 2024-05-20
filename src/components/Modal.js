import React from 'react'
import {Link} from 'react-router-dom'

const Modal = ({handleModalClose, title, text, url}) => {


  return (
    <div className='modal_wrap'>
        <div className='dim'></div>
        <div className='modal'>
            <div className='modal_img_box'>

            </div>

            <div className='modal_text'>
                <h4>
                  {title}
                </h4>
                <p>
                  {text}
                </p>
                <Link to=""></Link>
            </div>

            <span className='modal_close' onClick={handleModalClose}></span>
        </div>
        
    </div>
  )
}

export default Modal