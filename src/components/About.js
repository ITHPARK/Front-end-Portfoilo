import React from 'react'


const About = () => {
  return (
    <div className='article about'>
      
      <h2 className='content_tit'>Profile</h2>

      <div className='content_box'>
        <div className='my_info'> 
          <dl>          
            <dt>이름</dt> 
            <dd>박태현</dd>                     
          </dl>

          <dl>
            <dt>생년월일</dt>
            <dd>2000.10.05</dd>                                       
          </dl>
          
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
            <div className='skill_card'>
              <div className='skill_box '>
                <img src="/images/icons/ico_html.png" alt="html"/>
              </div>
              <div className='skill_comment'>
                <p>
                  적절한 태그사용과 효율적인 구조를 작업할 수 있습니다.
                  퍼블리셔로 재직하며 디자인 시안에 맞게 여러 레이아웃 또는 기능들이 들어가는 구조들을 작업해보았습니다.
                </p>
              </div>  
            </div>
          </li>
          <li>
            <div className='skill_card'>
              <div className='skill_box'>
                <img src="/images/icons/ico_css.png" alt="css"/>
              </div>
              <div className='skill_comment'>
               <p>작업한 Html을 바탕으로 효율적인 스타일 작업을 할 수 있습니다.</p>
              </div>
            </div>
          </li>
          <li>
           <div className='skill_card'>  
              <div className='skill_box'>
                <img src="/images/icons/ico_js.png" alt="js"/>
              </div>
              <div className='skill_comment'>
                <p>
                  자바스크립트를 활용할여 여러 이벤트 구현을 할 수 있습니다.
                  자바스크립트의 비동기 통신 , 호이스팅, 이벤트루프 등의 개념을 이해하고 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className='skill_card'>  
              <div className='skill_box'>
                <img src="/images/icons/ico_jquery.png" alt="jquery"/>
              </div>
              <div className='skill_comment'>
                <p>
                  자바스크립트 지식을 바탕으로 여러가지 화면 이벤트를 구현할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
           <div className='skill_card'>  
              <div className='skill_box'>
                <img src="/images/icons/ico_react.png" alt="react"/>
              </div>
              <div className='skill_comment'>
                <p></p>
              </div>
            </div>
          </li>
        </ul>               
      </div>

    </div>
  )
}

export default About