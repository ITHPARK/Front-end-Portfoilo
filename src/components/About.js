import React from 'react'


const About = () => {
  return (
    <div className='article about'>
      <div className='article_inner'>
        <h2>
          ABOUT
        </h2>
        <div className='content'>
          <ul className='aboutlist'>
            <li>
              <span className='tit'>이름</span>
              <p>박태현</p>
            </li>
            <li>
              <span className='tit'>생년월일</span>
              <p>2000.10.05</p>
            </li>
            <li>
              <span className='tit'>연락처</span>
              <p>010-7282-1986</p>
            </li>
            <li>
              <span className='tit'>이메일</span>
              <p>ithpark@naver.com</p>
            </li>
          </ul>
          <p className='intro'>
            안녕하세요. 항상 눈에보이는 결과물을 만들어내는것에 흥미를 느끼는 신입 개발자 박태현입니다.  <br />
            이전에 퍼블리셔로 근무하며 여러가지 기능들을 구현해내는 것에 성취감과 새로운 것들을 학습 할 수 있다는것에 흥미를 느껴 프론트엔드 개발 직무에 지원하게 되었습니다.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default About