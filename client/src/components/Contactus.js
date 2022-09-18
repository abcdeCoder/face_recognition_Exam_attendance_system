import React from 'react'
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import car from './image/contact.png'; // gives image path
import { FaGithub ,FaGooglePlusG ,FaInvision } from "react-icons/fa";
import { ImMobile2,ImMail3 } from "react-icons/im";
import { FcPortraitMode } from "react-icons/fc";
import { ImHome } from "react-icons/im";
import { BiHourglass } from "react-icons/bi";
import "./contactus.css";

const Contactus =() =>{
 
    const navigate = useNavigate();
  

    window.onpopstate = () => {
 
        navigate("/Contactus");
  };
       
    return (
    <>
<section className="contact-section">
  <div className="contact-bg">
    <h3>Get in Touch with Us</h3>
    <h2>contact us</h2>
    <div className="line">
      <div />
      <div />
      <div />
    </div>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste
      facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis
      quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
    </p>
  </div>
  <div className="contact-body">
    <div className="contact-info">
      <div>
        <span>
          <i className="fas fa-mobile-alt" /><ImMobile2 />
        </span>
        <span>Phone No.</span>
        <span className="text">+91 7042269320</span>
      </div>
      <div>
        <span>
          <i className="fas fa-envelope-open" /><ImMail3 />
        </span>
        <span>E-mail</span>
        <span className="text">gaurav.02116403220@ipu.ac.in</span>
      </div>
      <div>
        <span>
          <i className="fas fa-map-marker-alt" /><ImHome />
        </span>
        <span>Address</span>
        <span className="text">
        Rz-A-11 Upper Ground Floor Dabri Nasirpur Road Dabri Ext India
        </span>
      </div>
      <div>
        <span>
          <i className="fas fa-clock" /><BiHourglass />
        </span>
        <span>Opening Hours</span>
        <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
      </div>
    </div>
    <div className="contact-form">
      
      <div>
        <img src={car} alt="this is car" />
      </div>
    </div>
  </div>
  <div className="map">
    <iframe
    title='map'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1643631347815!2d77.01962681500814!3d28.594845582432683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7ecf94d7d7%3A0x3fc269f6a8b039e5!2sGGSIPU%20Main%20Gate%20(State%20Government%20University)!5e0!3m2!1sen!2sin!4v1662059932312!5m2!1sen!2sin"
      width="100%"
      height={450}
      frameBorder={0}
      style={{ border: 0 }}
      allowFullScreen
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
  <div className="contact-footer">
    <h3>Follow Us</h3>
    <div className="social-links">
      <a href="https://github.com/abcdeCoder" className="fab fa-facebook-f" ><FaGithub/></a>
      <a href="mailto:gaurav.02116403220@ipu.ac.in" className="fab fa-twitter" ><FaGooglePlusG/></a>
      <a href="https://abcdecoder.github.io/portfolio.github.io/" className="fab fa-linkedin" ><FcPortraitMode/></a>
      <a href="https://www.linkedin.com/in/gaurav-verma-88056a224/" className="fab fa-youtube" ><FaInvision/></a>
    </div>
  </div>
</section>
      </>
  )
};
export default Contactus;
    