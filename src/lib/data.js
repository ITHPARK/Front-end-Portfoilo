import { FaHtml5, FaCss3Alt, FaSass, FaReact   } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiRedux, SiRecoil, SiJquery } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const skillData = [
    {
        skill: <FaHtml5 size={60} color="#e54d26"/>,
        text: "HTML5"
    },
    {
        skill: <FaCss3Alt size={60} color='#264de4' />,
        text: "CSS3"
    },
    {
        skill: <FaSass size={60} color='#cb6899'/>,
        text: "SASS"
    },
    {
        skill: <SiTailwindcss size={60} color='#0bb6d4'/>,
        text: "TAILWIND CSS"
    },
    {
        skill: <SiJavascript size={60} color='#f5de19'/>,
        text: "JACSCRIPT"
    },
    {
        skill: <SiJquery size={60} color='#0773b4'/>,
        text: "JQUERY"
    },
    {
        skill: <SiTypescript  size={60} color='#377cc8'/>,
        text: "TYPESCRIPT"
    },
    {
        skill: <FaReact   size={60} color='#61dafb'/>,
        text: "REACT"
    },
    {
        skill: <RiNextjsFill size={60} color='#fff'/>,
        text: "NEXT.JS"
    },
    {
        skill: <SiRedux size={60} color='#7f42c3' />,
        text: "REDUX"
    },
    {
        skill: <SiRecoil size={60} color='#2a60df' />,
        text: "RECOIL"
    },
];


export const projectData = [
    {
        title: "REACT 넷플릭스",
        useSkill: [[<FaReact   size={25} color='#61dafb'/>, "REACT"], [<FaSass size={25} color='#cb6899'/>, "SASS"]],
        info: [
            "The Movie DB Api를 받아 axios를 활용하여 비동기 통신으로 데이터를 받아 각종 영화 정보를 나타내었습니다.", 
            "SASS를 활용하여 레이아웃 디자인과 각 디바이스를 지원하는 반응형 작업을 진행하였습니다.",
            "Swiper플러그인을 이용하여 한 화면에 일정개수의 영화정보를 나타내고 스크롤을 할수있도록 구현했습니다.",
            "api로 받은 데이터를 활용하여 각 영화 클릭시 상세정보와 평점, 플레이 클릭 시 영화 예고편 확인 가능합니다.", 
            "쿼리스트링 검색어를 활용하여 다시 비동기 요청을 보낸 후 검색어 관련 영화를 제공하는 검색기능을 구현했습니다.", 
        ],
        img: ["images/netflix_1.png", "images/netflix_2.png", "images/netflix_3.png", "images/netflix_4.png", "images/netflix_5.png", ],
        url: "https://react-netflix-65fce.web.app/",
        git: "https://github.com/ITHPARK/Nexflix-App"

    },
    {
        title: "NEXT.JS 유튜브 뮤직",
        useSkill: [[<RiNextjsFill size={25} color='#000'/>, "NEXT.JS"], [<SiTailwindcss size={25} color='#0bb6d4'/>, "TAILWIND CSS"]],
        info: [
            "더미 데이터를 만들어서 유튜브 뮤직을 제작했습니다.", 
            "Tilwind CSS를 활용하여 레이아웃 디자인과 반응형을 제작하였습니다.",
            "각 카테고리마다 제공하는 플레이리스트를 구현했습니다.",
            "재생버튼 클릭시 노래가 재생됩니다.", 
            "재생, 정지, 이전곡, 다음곡 등 컨트롤러 기능을 구현하였습니다.", 
        ],
        img: ["images/ytmusic_1.png", "images/ytmusic_2.png", "images/ytmusic_3.png", "images/ytmusic_4.png", "images/ytmusic_5.png", ],
        url: "https://next-ytmusic.vercel.app/",
        git: "https://github.com/ITHPARK/next-ytmusic"
    },
    {
        title: "Recoil을 활용한 카페 관리자 페이지",
        useSkill: [[<FaReact   size={25} color='#61dafb'/>, "REACT"], [<SiRecoil size={25} color='#2a60df' />, "RECOIL"]],
        info: [
            "jsonplaceholder post api를 활용한 비동기 요청으로 데이터를 받아 카페 글 리스트를 만들었습니다.", 
            "데이터로 내려받은 전체 글 개수에 따라 페이징을 한 페이지에 10개의 글을 노출하도록 구현하였습니다.",
            "FACEBOOK에서 출시한 전역 상태관리 라이브러리 RECOIL을 활용하여 관리자 페이지에서 글의 비공개 제목 수정이 가능합니다.",
          ],
        img: ["images/recoil_1.png", "images/recoil_2.png"],
        url: "https://ithpark.github.io/react-recoil-app/",
        git: "https://github.com/ITHPARK/react-recoil-app"

    },
    {
        title: "Redux을 활용한 장바구니 페이지",
        useSkill: [[<FaReact   size={25} color='#61dafb'/>, "REACT"], [<SiRedux size={25} color='#7f42c3' />, "REDUX"]],
        info: [
            "전역상태관리 라이브러리 redux를 이용하여 장바구니 상품 리스트를 만들었습니다.", 
            "reducer 함수를 생성하여 상품을 담고 장바구니로 이동하여 상품의 수량과 삭제를 설정하고 총 결제금액까지 나타내도록 구현하였습니다.",
          ] ,
        img: ["images/redux_1.png", "images/redux_2.png", "images/redux_3.png"],
        url: "https://ithpark.github.io/react-redux-app/",
        git: "https://github.com/ITHPARK/react-redux-app"

    },
];