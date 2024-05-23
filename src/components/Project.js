import React, {useState} from 'react'
import Modal from './Modal';
import {Link} from 'react-router-dom';


const Project = () => {

  const [modalStatus, setModalStatus] = useState(false);
  const [info, setInfo] = useState([
    {
      id: "netflix-clone-coding",
      title: "리액트 넷플릭스 클론코딩",
      text: {
        skill: ['REACT', 'SASS'],
        word: [
                "The Movie DB Api를 받아 axios를 활용하여 비동기 통신으로 데이터를 받아 각종 영화 정보를 나타내었습니다.", 
                "SASS를 활용하여 레이아웃 디자인과 각 디바이스를 지원하는 반응형 작업을 진행하였습니다.",
                "Swiper플러그인을 이용하여 한 화면에 일정개수의 영화정보를 나타내고 스크롤을 할수있도록 구현했습니다.",
                "api로 받은 데이터를 활용하여 각 영화 클릭시 상세정보와 평점, 플레이 클릭 시 영화 예고편 확인 가능합니다.", 
                "쿼리스트링 검색어를 활용하여 다시 비동기 요청을 보낸 후 검색어 관련 영화를 제공하는 검색기능을 구현했습니다.", 
              ] 
      },
      url: "https://react-netflix-3b61e.web.app/",
      img: "/images/netflix.jpg",
      img2: "/images/icons/ico_netflix.png"
    },
    {
      id: "react-recoil-app",
      title: "Recoil을 활용한 카페 관리자 페이지",
      text: {
        skill: ['REACT', 'RECOIL'],
        word: [
                "jsonplaceholder post api를 활용한 비동기 요청으로 데이터를 받아 카페 글 리스트를 만들었습니다.", 
                "데이터로 내려받은 전체 글 개수에 따라 페이징을 한 페이지에 10개의 글을 노출하도록 구현하였습니다.",
                "FACEBOOK에서 출시한 전역 상태관리 라이브러리 RECOIL을 활용하여 관리자 페이지에서 글의 비공개 제목 수정이 가능합니다.",

              ] 
      },
      url: "https://react-netflix-3b61e.web.app/",
      img: "/images/netflix.jpg",
      img2: "/images/icons/ico_recoil.png"
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
                <div className='project_box'>
                  <img src={item.img2} alt=""/>
                </div>
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
          img = {selectedProjectId.img}
        /> 
      }
    </>
  )
}

export default Project