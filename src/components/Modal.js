import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import {useOnClickOutside} from '../hooks/useOnClickOutsie'

//
const Modal = ({setModalStatus, handleModalClose, title, text, url, img, git}) => {

  const ref = useRef();

  useOnClickOutside(ref, () => {

    setModalStatus(false);
    
});



  return (
    <div className='modal_wrap' >
        <div className='dim'></div>
        <div className='modal' ref={ref}>
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
                  <span>SITE URL : </span>
                  <Link to={url} target='_blank'>{url}</Link>
                </div>
                <div className='url'>
                  <span>GITHUB : </span>
                  <Link to={git} target='_blank'>{git}</Link>
                </div>
                
            </div>

            <span className='modal_close' onClick={handleModalClose}></span>
        </div>
        
    </div>
  )
}

export default Modal