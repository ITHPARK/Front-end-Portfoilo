import React from 'react'
import { FaHtml5, FaCss3Alt, FaSass, FaReact   } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiRedux, SiRecoil, SiJquery } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {skillData} from "../lib/data"

const Skills = () => {
  return (
    <div className='article skills'>
      <div className='article_inner'>
        <h2>
          SKILLS
        </h2>
        <div className='content'>
        <div className='skill_box'>
            <h3>Front-End</h3>
             <ul>
                {
                  skillData.map((item) => {
                    return  (
                      <li key={item.text}>
                        {item.skill}
                        <p>{item.text}</p>
                      </li>
                    )
                  })
                }
            </ul>
        </div>
            
        </div>
      </div>
    </div>
  )
}

export default Skills