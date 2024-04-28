import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cover = () => {
  const [pageName, setPageName] = useState('');
  const [idx, setIdx] = useState(0);
  const [animateStart, setAnimateStart] = useState(false)

  const path = useLocation();
  let word;  

  if(path.pathname == "/") {
    word = "PORTFOLIO";
  }else {
    word = path.pathname.replace(/\//g, '').toUpperCase();
  }

  const wordArr = word.split('');

  useEffect(() => {

    // path가 변경될 때마다 pageName 상태를 초기화
    setPageName('');

    // idx 상태도 초기화
    setIdx(0);

    // animate 초기화

    setAnimateStart(false);

  }, [path]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx < wordArr.length) {
        setPageName(prev => prev + wordArr[idx]);
        setIdx(prevIdx => prevIdx + 1);
      } else {
        clearInterval(interval);
      }

      if(idx == wordArr.length - 1 ) {
        setTimeout(() => {
          setAnimateStart(true);
        }, 500);
      }

    }, 80);

    //컴포넌트를 더이상 사용하지 않을 때 clearInterval;
    return () => clearInterval(interval);

    //의존성 배열에 추가하지 않으면 컴포넌트가 추가될때마다 초기값을 가진다.
  }, [wordArr, idx]);

  return (
    <div className='cover_section'>
      <div className='cover_inner'>
        <h2>Front-end</h2>
        <p className='page_name'>{pageName}</p>
      </div>

      <div className={`arrow ${animateStart ? "animate": "hide"}`}>
        <span className='icon'></span>
      </div>
    </div>
  );
};

export default Cover;