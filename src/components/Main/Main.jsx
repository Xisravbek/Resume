import React from 'react';
import './Main.css'
import MyImage from '../../images/photo_2025-06-08_09-27-26.jpg';
import PizzaImage from '../../images/Снимок экрана 2025-10-01 213758.png'
import MessengerImage from '../../images/image.png';
import FigmaImage from '../../images/Снимок экрана 2025-10-02 153335.png'


import ReactImage from '../../images/0_x-HyaNxF4CJW0gSc.png'
import AntImage from '../../images/cover.png';
import ApiImage from '../../images/rest-api.png';
import NodeImage from '../../images/79c51d0e3a3f60b504da6bcc20ab1afc.jpg'
import ExpressImage from '../../images/images.png'
import MongoImage from '../../images/02Q6yxveinggAu3PomearaV-7.webp'
import { Link } from 'react-scroll';
import Contact from '../Contact/Contact';

import HikamtulloImage from '../../images/Снимок экрана 2025-10-02 222631.png';
import JahongirImage from '../../images/jahongir2.jpg';
import MuhammadaliImage from '../../images/muhammadali.jpg';

const Main = () => {
  return (
    <div className='main'>
      <div name='home' className="main-top">
        <div className="main-top-info">
          <h1>I’m Khisravbek Khamidov Full-Stack Developer</h1>
        <p className="main-top-text">Code is not just a set of instructions, it is a tool that turns dreams into reality. I am always learning new technologies and trying to apply them in my projects. My goal is to strive for excellence and provide the best result for my clients !</p>
        <button  className="main-top-btn hire-btn">
          <Link to='contact'>
          Hire me <span className='fa-solid fa-arrow-right'></span>
          </Link>
        </button>
        </div>
        <div className="main-top-image">
          <img src={MyImage} alt="image " />
        </div>
      </div>

      <div name={'services'} className="my-services">
        <div className="my-services-top">
          <h2>My Services</h2>
          <p>Responsive websites, frontend programming with React and Ant Design, Figma to code, optimized and clean code, API integration, backend development with Node.js and Express, database management with MongoDB or PostgreSQL, full web application creation.</p>
        </div>
        <div className="my-services-info">
          <div className="my-services-box">
            <div className="first-box">
              <i class="fa-regular fa-circle-dot"></i>
              <p>Modern, responsive websites.</p>
            </div>  
          </div>
          <div className="my-services-box">
            <div className="first-box">
              <i class="fa-solid fa-user-shield"></i>
              <p>Secure server-side apps & databases.</p>
            </div>
          </div>
          <div className="my-services-box">
            <div className="first-box">
              <i class="fa-solid fa-mobile-screen-button"></i>
              <p>Works on all devices.</p>
            </div>  
          </div>
          <div className="my-services-box">
            <div className="first-box">
              <i class="fa-solid fa-server"></i>
              <p>REST & GraphQL connections.</p>
            </div>  
          </div>
          <div className="my-services-box">
            <div className="first-box">
              <i class="fa-solid fa-gauge-high"></i>
              <p>Speed & security improvements.</p>
            </div>  
          </div>
          <div className="my-services-box">
            <div className="first-box">
              <i class="fa-solid fa-globe"></i>
              <p>Hosting & project maintenance.</p>
            </div>  
          </div>

        </div>
      </div>

      {/* education */}
      <div name={'education'} className="education">
        <h3 className="education-title">Education</h3>
        <p className="education-text">I have deepened my programming knowledge through university studies and specialized courses in web development. I combine scientific research with practical experience to design and build new projects.</p>
        <div className="education-box">
          <div className="education-box-info">
            <div className="education-info-left">
              <h4 className="education-info-course">
                Webstar Academy
              </h4>
              <div className="education-info-student">
                <p>Student</p>
                <span>Mar 2023- Dec 2023</span>
              </div>
            </div>
            <div className="education-info-right">
              <h3 className="education-info-title">Front End course</h3>
              <p className="education-info-text">I developed my interest in programming while studying at Webstar Academy, where I learned front-end development. My focus was on HTML, CSS, JavaScript, and React, with a strong emphasis on web programming.</p>
            </div>
          </div>
          <div className="education-box-info">
            <div className="education-info-left">
              <h4 className="education-info-course">
                Webstar Academy
              </h4>
              <div className="education-info-student">
                <p>Student</p>
                <span>Jan 2024 - Aug 2024</span>
              </div>
            </div>
            <div className="education-info-right">
              <h3 className="education-info-title">Back End course</h3>
              <p className="education-info-text">I also completed a Back-End Development course, where I gained hands-on experience with Node.js, Express, and working with databases such as MongoDB and MySQL. This course strengthened my understanding of building and managing server-side applications, APIs, and connecting them with front-end solutions.</p>
            </div>
          </div>
          <div className="education-box-info">
            <div className="education-info-left">
              <h4 className="education-info-course">
                Tashkent State University of Economics
              </h4>
              <div className="education-info-student">
                <p>Student</p>
                <span>Sep 2024 - now</span>
              </div>
            </div>
            <div className="education-info-right">
              <h3 className="education-info-title">Bachelor of Computer Engineering</h3>
              <p className="education-info-text">Studied core subjects in economics, finance, and management, gaining analytical and problem-solving skills useful for both business and technology..</p>
            </div>
          </div>
        </div>
      </div>


      {/* Recomendation */}
      <div name={'recomendation'} className="recomendation">
        <h3 className="recomendation-title">Recomendation</h3>
        <p className="recomendation-text">Throughout my journey as a frontend developer and mentor, I’ve had the privilege of working with talented individuals and helping many students grow in their careers.</p>

        <div className="recomendation-box">
          <div className="recomendation-person">
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4 className="recomendation-review">Dedicated and analytical student</h4>
            <p className="recomendation-context">Xisravbek has shown strong skills in backend development, especially in building APIs with Node.js and Express. He understands database management and applies best practices in structuring his projects. His dedication and ability to learn new technologies quickly make him stand out among his peers.
            </p>


            <div className="recomendation-info">
              <div className="image"><img src={JahongirImage} alt="image" /></div>
              <div className="about-person">
                <h4 className="name">Jahongir Saddulayev</h4>
                <p className="job">Back end teacher</p>
              </div>
            </div>
            
          </div>
          <div className="recomendation-person">
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4 className="recomendation-review">Creative and detail-oriented learner</h4>
            <p className="recomendation-context">Xisravbek consistently impressed me with his frontend programming skills. He works confidently with React, Ant Design, and responsive design principles. His attention to detail and ability to transform Figma designs into clean, optimized code highlight his professionalism as a developer.
            </p>


            <div className="recomendation-info">
              <div className="image"><img src={HikamtulloImage} alt="image" /></div>
              <div className="about-person">
                <h4 className="name">Hikmatullo Mullajonov</h4>
                <p className="job">Front end teacher</p>
              </div>
            </div>
            
          </div>
          <div className="recomendation-person">
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4 className="recomendation-review">Reliable, motivated and team-oriented student</h4>
            <p className="recomendation-context">Xisravbek is a hardworking and motivated student who demonstrated excellent progress throughout his studies at our academy. He combines technical knowledge with creativity and problem-solving, making him a promising full stack developer. I confidently recommend him for any future opportunities.
            </p>


            <div className="recomendation-info">
              <div className="image"><img src={MuhammadaliImage} alt="image" /></div>
              <div className="about-person">
                <h4 className="name">Muhammadali</h4>
                <p className="job">Webstar director</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Portfolio */}

      <div name={'portfolio'} className="portfolio">
        <h3 className="portfolio-title main-field-title">Portfolio</h3>
        <p className="protfolio-text main-field-text">I will showcase my web development projects that incorporate modern design, responsive layouts, and interactive user experiences. Of course, no personal or private projects are featured here.</p>

        <div className="portfolio-box">
          <div className="portfolio-info">
            <a target='_blank' href="https://own-pizza-client.vercel.app/">
              <img src={PizzaImage} alt="web" />
            </a>
          </div>


          <div className="portfolio-info">
            <a target='_blank' href="https://messenger-blue-rho.vercel.app/">
              <img src={MessengerImage} alt="web" />
            </a>
          </div>

          <div className="portfolio-info">
            <a target='_blank' href="https://velvety-cupcake-16de82.netlify.app/">
              <img src={FigmaImage} alt="web" />
            </a>
          </div>

        </div>
      </div>

      {/* Blog */}

      <div name={'blog'} className="blog">
        <h3 className="blog-title main-field-title">
          Blog
        </h3>
        <p className="blog-text main-field-text">
          I run a blog to share my experiences in web programming and software development. I write articles about frontend technologies and my projects. I try to provide useful advice for those interested in programming.
        </p>

        <div className="blog-box">
          <div className="blog-info">
            <div className="blog-image">
              <img src={ReactImage} alt="image" />
            </div>
           <div className="blog-pad">
              <h4 className="blog-info-title">
                Creating    UI   with React
              </h4>
              <p className="blog-info-text">Basic principles and practical examples of creating interactive user interfaces using React.</p>
              <a href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
            </div>
          </div>


          <div className="blog-info">
            <div className="blog-image">
              <img src={AntImage} alt="image" />
            </div>
            <div className="blog-pad">
              <h4 className="blog-info-title">
                Creating a UI with Ant Design
              </h4>
              <p className="blog-info-text">Basic techniques for creating modern and responsive user interfaces using Ant Design.</p>
              <a href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
            </div>
          </div>


          <div className="blog-info">
            <div className="blog-image">
              <img src={ApiImage} alt="image" />
            </div>
            <div className="blog-pad">
              <h4 className="blog-info-title">
                Connecting REST API
              </h4>
              <p className="blog-info-text">Frontend and backend integration, data exchange, and authentication processes via REST API.</p>
              <a href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
            </div>
          </div>


          <div className="blog-info">
            <div className="blog-image">
              <img src={NodeImage} alt="image" />
            </div>
            <div className="blog-pad">
              <h4 className="blog-info-title">
                Building Server-Side Applications with Node.js
              </h4>
              <p className="blog-info-text">Efficient server-side development and asynchronous programming with Node.js.</p>
              <a href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
            </div>
          </div>


          <div className="blog-info">
            <div className="blog-image">
              <img src={ExpressImage} alt="image" />
            </div>
            <div className="blog-pad">
              <h4 className="blog-info-title">
                Designing Relational Databases with PostgreSQL
              </h4>
              <p className="blog-info-text">Reliable relational database design, querying, and data management with PostgreSQL.</p>
              <a href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
            </div>
          </div>


          <div className="blog-info">
            <div className="blog-image">
              <img src={MongoImage} alt="image" />
            </div>
            <div className="blog-pad">
              <h4 className="blog-info-title">
                Managing NoSQL Databases with MongoDB
              </h4>
              <p className="blog-info-text">Database modeling, management, and optimization with MongoDB for modern web applications.</p>
              <a href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Contace */}

      <Contact />
    </div>
  )
}

export default Main
