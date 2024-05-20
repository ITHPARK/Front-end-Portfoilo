import React, {useState} from 'react'
import Modal from './Modal';
import {Link} from 'react-router-dom';


const Project = () => {

  const [modalStatus, setModalStatus] = useState(false);
  const [info, setInfo] = useState([
    {
      id: "netflix-clone-coding",
      title: "리액트 넷플릭스 클론코딩",
      text: "The Movie DB API를 이용해 비동기 요청을 하여 데이터를 받아 주간 영화 순위, 장르별 영화, 영화 상세정보, 평점 등의 정보를 받아 넷플릭스의 레이아웃을 참고해서 작업하였습니다. react-router를 활용하여 중첩라우팅과 동적라우팅을 구현하였으며",
      url: "",
    },
  ]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleModalOpen = (item) => {
    setModalStatus(true);
    setSelectedProjectId(item);
  }

  const handleModalClose = () => {
    setModalStatus(false);
  }



  return (
    <>
      <div className="article project">
        <h2 className='content_tit'>Project</h2>

        <ul className='project_list'>
        {
          info.map((item) => {
            return(
              <li onClick={() => handleModalOpen(item)} key={item.id}>
              <Link>
                <div className='project_box'></div>
                <h4>{item.title}</h4>
              </Link> 
            </li>
            )
          })
        }
        </ul>
      </div>

      {modalStatus &&
        <Modal 
          handleModalClose={handleModalClose} 
          title = {selectedProjectId.title}
          text = {selectedProjectId.text}
          url = {selectedProjectId.url}
        /> 
      }
    </>
  )
}

export default Project