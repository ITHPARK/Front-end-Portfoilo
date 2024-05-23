import React from 'react'


const About = () => {
  return (
    <div className='article about'>
      <div className='content_box'>
        <div className='my_info'> 
          <h3>안녕하세요! 신입 프론트엔드 개발자 박태현입니다!</h3>
          
          <p>
            안녕하세요. 항상 눈에보이는 결과물을 만들어내는것에 흥미를 느끼는 신입 개발자 박태현입니다.  <br />
            이전에 퍼블리셔로 근무하며 여러가지 기능들을 구현해내는 것에 성취감과 새로운 것들을 학습 할 수 있다는것에 흥미를 느껴 프론트엔드 개발 직무에 지원하게 되었습니다.
          </p>
        </div>  
      </div>            

      <h2 className='content_tit'>Skils</h2>

      <div className='content_box'>
        <ul className='skills_list'>
          <li>
            <div className='skill_box html'>
              <img src="/images/icons/ico_html.png" alt="html"/>
            </div>
            <div className='skill_comment'>
              <h3>HTML5</h3>
              <p>
                적절한 태그사용을하여 각 다자인 시안에 맞는 구조를 CSS와 함께 효울적으로 작업할 수 있도록 작업할 수 있습니다.<br />
                퍼블리셔로 재직하며 각종 이벤트, 메인 페이지, 로그인 페이지 등 여러 기능들이 들어가는 구조들을 작업해보았습니다.
              </p>
            </div>      
          </li>
          <li>
              <div className='skill_box css'>
                <img src="images/icons/ico_css.png" alt="css"/>
              </div>
              <div className='skill_comment'>
                <h3>CSS3</h3>
                <p>작업한 HTML바탕으로 각종 인터렉션, 애니메이션, 모달창 등 구현을 위한 작업이 가능합니다.  </p>
              </div>
          </li>
          <li>
              <div className='skill_box js'>
                <img src="images/icons/ico_js.png" alt="js"/>
              </div>
              <div className='skill_comment'>
                <h3>JAVASCRIPT</h3>
                <p>
                  자바스크립트 함수와 조건문, 반복문을 활용할여 여러 이벤트, 비동기 처리, API 호출 작업 이 가능합니다.<br/>  
                  자바스크립트의 비동기 통신, 호이스팅, 이벤트루프 등의 기본적으로 자바스크립트가 실행되는 기본적인 로직을 이해하고 있습니다. 
                </p>
              </div>
          </li>
          <li>
             <div className='skill_box jquery'>
                <img src="/images/icons/ico_jquery.png" alt="jquery"/>
              </div>
              <div className='skill_comment'>
                <h3>JQUERY</h3>
                <p>
                  자바스크립트 지식을 바탕으로 js에서는 구현이 비교적 복잡한 swiper, jquery ui을 활용한 인터렉션, 위젯, 효과들을 작업할 수 있습니다.                 
                </p>
              </div>
          </li>
          <li>
              <div className='skill_box react'>
                <img src="/images/icons/ico_react.png" alt="react"/>
              </div>
              <div className='skill_comment'>
                <h3>REACT</h3>
                <p>
                  SPA 방식 라이브러리인 리액트에 대한 개념과 특징을 이해하고 있고 리액트 내에서 사용가능한 기본 hooks를 사용하여 
                  변수 상태 관리, 페이지 이동, 컴포넌트 상태에 따른 함수 실행, 프로젝트 경로 이동, 동적 라우팅 작업이 가능하며, swiper같은 플러그인을 사용하여 컴포넌트를 구성할 수 있습니다.
                </p>
              </div>
          </li>
          <li>
              <div className='skill_box react'>
                <img src="/images/icons/ico_redux.png" alt="react"/>
              </div>
              <div className='skill_comment'>
                <h3>Redux</h3>
                <p>
                 전역 상태관리 라이브러리로. redux-toolkit을 활용해 저장소를 만들고 reducer 함수들을 만들어 state를 처리할 수 있습니다.
                </p>
              </div>
          </li>
          <li>
              <div className='skill_box react'>
                <img src="/images/icons/ico_recoil.png" alt="react"/>
              </div>
              <div className='skill_comment'>
                <h3>Recoil</h3>
                <p>
                  React 전역 상태관리 라이브러리로, atom과 select를 이용한 작업이 가능합니다.
                </p>
              </div>
          </li>
        </ul>               
      </div>

    </div>
  )
}

export default About