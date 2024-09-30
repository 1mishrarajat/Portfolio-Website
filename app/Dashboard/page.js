'use client'
import React from 'react'
import Image from 'next/image';
import { FaFileDownload, FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa'
 import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function page() {
  const Router =useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
    
<nav class="navbar">
        <div class="navbar-container">
                      <a href="#" class="logo"> Rajat Mishra</a>
                       {/* Hamburger icon for mobile view */}
                      <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? "✖" : "☰"} {/* Change between 'X' and 'Menu' icons */}
        </div>
       
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#Service">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <a href="#" class="btn"  onClick={()=>Router.push("./Login")} >Sign Up</a>
        </div>
    </nav>

<section className="hero-section" id='home'>
      <div className="hero-text">
        <div className='my-info-box'>
        <h1>Hi, I'm Rajat Mishra</h1>
        <p>Web Developer | React Enthusiast | Frontend Developer</p>

        {<div className="download-cv-btn">
        <a
          className="cv-button"
          href="/Rajat_Resume1.pdf"  // Adjust the path according to where your PDF is stored
         >
           Download CV
       </a>
    </div> }
        </div>
        
        <div className=' image'>
          <Image src="/me.jpeg"          //path to your image
             alt="Description of the image"
             width={250}// Image width in pixels
             height={400} // Image height in pixels
          />
       </div>

    </div> 
</section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className='container'>
            <div className='row'>

            <div className='about-content-box'>
        <h2>About Me</h2>
        <p>
          I am a web developer with a passion for creating beautiful, functional, and responsive websites. With a focus
          on front-end technologies like React and Next.js, I build projects that not only look great but also provide a
          seamless user experience.
       
          I  have completed my <strong>Bachelor of Technology</strong> Degree specializing in Electronics and Communication
         Engineering.I have built a solid foundation in Frontend Development  development, particularly in
         areas such as <strong> HTML, CSS ,JavaScript,React.js,Next.js, C# Programming Language,
         MYSQL. </strong>
         My expertise in these areas allows me to approach projects with confidence and deliver
         high-quality results.I have a strong belief in the value of continuous learning and
        staying adaptable in the ever-evolving world of software engineering.
         I actively seek out opportunities to expand my knowledge and skills, embracing new
         technologies and approaches.Feel free to explore my work and get in touch if you have
        any questions or opportunities to collaborate. 
                    
        </p>
        </div>
            </div>
        </div>
        
        
      </section>
{/* {Education} */}

      <section className="education-content" id="education">
    <div className="container">
        <div className="row">
            <div className="education">
                <h3 className="title">Education</h3>
                <div className="row">
                    <div className="timeline-box">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">B.TECH ECE - 74%</h3>
                                <h4 className="timeline-title">
                                    Feroze Gandhi Institute of Engineering and Technology
                                    <span>Raebareli, Uttar Pradesh</span>
                                </h4>
                                <h4 className="timeline-title">
                                    <i className="fa fa-calendar"></i> <time>2020-2024</time>
                                </h4>
                            </div>

                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">12<sup>th</sup> - 79%</h3>
                                <h4 className="timeline-title">St. Lawrence Public School</h4>
                                <h4 className="timeline-title">
                                    <i className="fa fa-calendar"></i> <time>2019-2020</time>
                                </h4>
                            </div>

                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-title">10<sup>th</sup> - 67%</h3>
                                <h4 className="timeline-title">St. Lawrence Public School</h4>
                                <h4 className="timeline-title">
                                    <i className="fa fa-calendar"></i> <time>2017-2018</time>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Clock</h3>
            <p>This is a simple implementation of the Clock using Html , CSS and JavaScript.</p>
          </div>
          <div className="project-card">
            <h3>Spotify-Clone</h3>
            <p>A Spotify clone is a platform that allows users to stream music, create playlists, and follow other users, similar to the popular music streaming service, Spotify. By creating a Spotify clone using html, css, Javascript.</p>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Created a portfolio website using HTML, CSS, and JavaScript,Next js. It serves as a platform to introduce myself, share my projects, and provide information about my education and skills.</p>
          </div>
        </div>
      </section>
      {/* Services Section */}
    <section className="services " id='Service'>
      <h2>What I Offer</h2>
      <div className="services-cards">
        <div className="card">
          <FaLaptopCode size={50} />
          <h3>Web Development</h3>
          <p>I build fast, responsive websites using modern frameworks.</p>
        </div>
        <div className="card">
          <FaMobileAlt size={50} />
          <h3>Frontend Development</h3>
          <p>Expert in creating visually appealing and highly responsive user interfaces, optimizing web performance, and enhancing user experience through modern frontend technologies like HTML, CSS, and JavaScript,React.js & Next js.</p>
        </div>
        <div className="card">
          <FaPalette size={50} />
          <h3>React Developer</h3>
          <p>Building dynamic and scalable web applications using React, ensuring high performance and seamless user interactions through reusable components and modern JavaScript techniques.</p>

        </div>
      </div>
      </section>
  {/* Contact */}
  <section className="contact-content" id="contact">
    <div className="container-block">
        <div className="contact-title">
            <h4>Contact Me</h4>
            <p>Get In Touch</p>
        </div>
        <div className="contact">
            <form name="submitToGoogleSheet">
                <input type="text" name="NAME" placeholder="Name" required />
                <input type="email" name="EMAIL" placeholder="Email" required />
                <input type="text" name="SUBJECT" placeholder="Subject" />
                <textarea name="MESSAGE" placeholder="Message" required></textarea>
                <input type="submit" value="Send Message" className="submit" />
            </form>
            <span id="msg"></span>
        </div>
    </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
      
   </>
  )
}
