import React from 'react'
import {Link} from 'react-router-dom'

//
const Modal = ({handleModalClose, title, text, url, img}) => {


  return (
    <div className='modal_wrap'>
        <div className='dim'></div>
        <div className='modal'>
            <div className='modal_img_box'>
              <img src={img} alt="img"/>
            </div>

            <div className='modal_text'>
                <h4>
                  {title}
                </h4>
                <ul>
                  {
                    text.word.map((item, idx) => {
                      return(
                        <li key={idx} >
                          <p>
                            {item}
                          </p>
                        </li>
                      )
                    })
                  }
                </ul>
                <div className='url'>
                  <span>url : </span>
                  <Link to={url} target='_blank'>{url}</Link>
                </div>
                
            </div>

            <span className='modal_close' onClick={handleModalClose}></span>
        </div>
        
    </div>
  )
}

export default Modal