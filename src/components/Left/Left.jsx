import React from 'react'
import "./Left.css"
import MyImage from '../../images/photo_2025-06-08_09-27-26.jpg';
import {Flex, Progress} from 'antd';

const Left = () => {
  return (
    <div className='left-container'>
      <div className='left'>
      <div className="top-info">
        <img src={MyImage} alt="Image" />
        <h3>Xisravbek Xamidov</h3>
        <p className="top-info-text">Full-stack developer</p>
        <ul className="top-info-box">
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-telegram"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
        </ul>
      </div>

      <hr  className='my-hr'/>  

      <div className="short-info">
        <div className="short-info-box">
            <h4>Residance:</h4>
            <p className="short-info-box">Uzbek</p>
        </div>
        <div className="short-info-box">
            <h4>Age:</h4>
            <p className="short-info-box">19</p>
        </div>
        <div className="short-info-box">
            <h4>Freelance:</h4>
            <p className="short-info-box">Available</p>
        </div>
        <div className="short-info-box">
            <h4>Address:</h4>
            <p className="short-info-box">Tashkent</p>
        </div>
      </div>

      <hr  className='my-hr'/>  

      <div className="language-info">
        <h3 className="language-title">Languages</h3>
         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">Uzbek</h4>
              <h4 className="language-info-skill">Native</h4>
            </div>
           <Progress showInfo={false} percent={100} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>
         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">English</h4>
              <h4 className="language-info-skill">B2</h4>
            </div>
           <Progress  showInfo={false} percent={50} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>
         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">Russian</h4>
              <h4 className="language-info-skill">Advenced</h4>
            </div>
           <Progress showInfo={false} percent={80} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>
      </div>

      <hr className='my-hr' />

      {/* skills */}

      <div className="skills-info language-info">
        <h3 className="language-title">Skills</h3>
         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">Html</h4>
              <h4 className="language-info-skill">80%</h4>
            </div>
           <Progress showInfo={false} percent={80} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>


         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">Css</h4>
              <h4 className="language-info-skill">80%</h4>
            </div>
           <Progress  showInfo={false} percent={80} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>


         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">JS</h4>
              <h4 className="language-info-skill">70%</h4>
            </div>
           <Progress showInfo={false} percent={70} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>


         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">React JS</h4>
              <h4 className="language-info-skill">70%</h4>
            </div>
           <Progress showInfo={false} percent={70} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>


         <Flex  className='language-info-option' gap="small" vertical>
            <div className="language-info-box">
              <h4 className="language-info-h4">Node JS</h4>
              <h4 className="language-info-skill">60%</h4>
            </div>
           <Progress showInfo={false} percent={60} percentPosition={{ align: 'center', type: 'outer' }} 
           trailColor='white' strokeColor={'#f97316'} size="small" />
        </Flex>
      </div>

      <hr className="my-hr" />

      <div className="extra-skills-info">
        <h3 className="extra-skills-title">Extra Skills</h3>
        <ul className="extra-skills-box">
          <li className="extra-skills-line">
            <span className='fa-regular fa-rectangle-list'></span><p>Bootstrap</p>
          </li>
          <li className="extra-skills-line">
            <span className='fa-regular fa-rectangle-list'></span><p>Sass</p>
          </li>
          <li className="extra-skills-line">
            <span className='fa-regular fa-rectangle-list'></span><p>Git & Github</p>
          </li>
          <li className="extra-skills-line">
            <span className='fa-regular fa-rectangle-list'></span><p>Ant-design, Redux</p>
          </li>
        </ul>
      </div>

      <hr className="my-hr" />


      <div className="download">
        <button className="download-btn hire-btn">Download <i class="fa-regular fa-circle-down"></i></button>
      </div>

    </div>
    </div>
  )
}

export default Left
