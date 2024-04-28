import {Routes, Route, Outlet,} from 'react-router-dom';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Aside from './components/Aside';
import Cover from './components/Cover';
import React  from "react";



const Layout = () => {
  return (
    <div>

      <Cover/>

      <div className='section'>
        <Outlet/> 
        <Aside/>
      </div>
      

    </div>
  )
}


function App() {

  // const $body = document.querySelector('body');
  // function preventScroll(e) {
  //   e.preventDefault();
  // }
  // // 'wheel' 이벤트를 사용하여 스크롤 감지 후 방지
  // $body.addEventListener('wheel', preventScroll, { passive: false });
  // $body.addEventListener('click', function() { // body 를 다시 클릭하면 스크롤 재개
  //   $body.removeEventListener('wheel', preventScroll, { passive: false });
  // });



  return (
    <div>
      
        <Routes >
            <Route path="/" element={<Layout />}> 
              <Route index element={<About/>}/>
              <Route path='project' element={<Project/>} /> 
              <Route path='contact' element={<Contact/>} /> 
               
            </Route>
        </Routes>
    </div>
  );
}

export default App;
