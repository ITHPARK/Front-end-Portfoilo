import React, {useState} from 'react'
import Modal from './Modal';


const Project = () => {

  const [modalStatus, setModalStatus] = useState(false);
  const [textVal, setTextVal] = useState("");
  const [imgUrl, setImgUrl] = useState("");  

  const handleModalOpen = () => {
    setModalStatus(true);
  }

  const handleModalClose = () => {
    setModalStatus(false);
  }

  return (
    <>
      <div className="article project">
        <h2 className='content_tit'>Project</h2>

        <ul className='project_list'>
          <li onClick={handleModalOpen}>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
          <li>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
          <li>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
          <li>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
          <li>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
          <li>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
          <li>
            <div className='project_box'></div>
            <p>유튜브 앱 클론코딩</p>
          </li>
        </ul>
      </div>

      {modalStatus &&
        <Modal handleModalClose={handleModalClose} /> 
      }
    </>
  )
}

export default Project