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

  return (
    <div>
        <Routes >
            <Route path="/" element={<Layout />}> 
              <Route index element={<About/>}/>
              <Route path='/project' element={<Project/>} /> 
              <Route path='/contact' element={<Contact/>} /> 
            </Route>
        </Routes>
    </div>
  );
}

export default App;
