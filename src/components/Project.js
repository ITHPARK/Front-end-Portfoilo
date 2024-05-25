import React, {useState} from 'react'
import Modal from './Modal';
import {Link} from 'react-router-dom';


const Project = () => {

  //
  const [modalStatus, setModalStatus] = useState(false);

  //프로젝트 리스트 객체
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
      url: "https://react-netflix-65fce.web.app/",
      img: "images/netflix.JPG",
      img2: "images/icons/ico_netflix.png",
      git: "https://github.com/ITHPARK/Nexflix-App"
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
      url: "https://ithpark.github.io/react-recoil-app/",
      img: "images/Recoil.JPG",
      img2: "images/icons/ico_recoil.png",
      git: "https://github.com/ITHPARK/react-recoil-app"
    },
    {
      id: "react-redux-app",
      title: "Redux을 활용한 장바구니 페이지",
      text: {
        skill: ['REACT', 'REDUX'],
        word: [
                "전역상태관리 라이브러리 redux를 이용하여 장바구니 상품 리스트를 만들었습니다.", 
                "reducer 함수를 생성하여 상품을 담고 장바구니로 이동하여 상품의 수량과 삭제를 설정하고 총 결제금액까지 나타내도록 구현하였습니다.",
              ] 
      },
      url: "https://ithpark.github.io/react-redux-app/",
      img: "images/Redux.JPG",
      img2: "images/icons/ico_redux.png",
      git: "https://github.com/ITHPARK/react-redux-app"
    },
  ]);

  //클릭한 프로젝트 객체를 모달에 전달하기 위한 state
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  //모달창 열기
  const handleModalOpen = (item) => {
    setModalStatus(true);

    //모달에 전달할 객체 정보를 할당
    setSelectedProjectId(item);
  }

  //모달창 닫기
  const handleModalClose = () => {
    setModalStatus(false);
  }



  return (
    <>
      <div className="article project">
        <h2 className='content_tit'>Project</h2>

        <div className='content_box'>
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
      </div>

      {modalStatus &&
        <Modal 
          setModalStatus = {setModalStatus}
          handleModalClose={handleModalClose} 
          title = {selectedProjectId.title}
          text = {selectedProjectId.text}
          url = {selectedProjectId.url}
          img = {selectedProjectId.img}
          img2 = {selectedProjectId.img2}
          git={selectedProjectId.git}
        /> 
      } 
    </>
  )
}

export default Project