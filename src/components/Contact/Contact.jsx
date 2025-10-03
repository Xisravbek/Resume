import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { Button } from 'react-scroll';



const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target);
    
    emailjs.sendForm(
      "service_etbomxk",
      "template_p30fhvl",
      e.target,
      "xrfpRSUiBWNXxVY9f"
    ).then(
      (result) => {
        console.log(result.text);
        alert("Xabar yuborildi!");
        e.target.reset()
      },
      (error) => {
        console.log(error.text);
        alert("Xatolik yuz berdi, qayta urinib ko‘ring.");
      }
    );
  };
  

  return (
    <div name={'contact'} className='contact'>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Leave me your info</h3>
          <form onSubmit={sendEmail} className="contact-form">
            <label>
              Your Full Name (Required)
              <input required name='name' type="text" />
            </label>
            <label>
              Your Email (Required)
              <input required name='email'  type="email" />
            </label>
            <label>
              Subject
              <input name='subject' type="text" />
            </label>
            <label>
              Your Message
              <textarea name='message' type="text" />
            </label>
            
            <button  type='submit' className='hire-btn send-btn'>Send Message</button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Contact information</h3>
          <div className="contact-info">
            <i class="fa-solid fa-location-dot"></i>
            <div className="contact-double">
              <p className="contact-text">Country:</p>
              <p className="contact-text">Uzbekistan</p>
            </div>
            <div className="contact-double">
              <p className="contact-text">City:</p>
              <p className="contact-text">Tashkent</p>
            </div>
            <div className="contact-double">
              <p className="contact-text">Region</p>
              <p className="contact-text">Almazar</p>
            </div>
          </div>


          <div className="contact-info">
            <i class="fa-solid fa-envelope"></i>
            <div className="contact-double">
              <p className="contact-text">Email:</p>
              <p className="contact-text">levtigr179@gmail.com</p>
            </div>
            <div className="contact-double">
              <p className="contact-text">Instagram:</p>
              <p className="contact-text">@xxa_267</p>
            </div>
            <div className="contact-double">
              <p className="contact-text">Telegram</p>
              <p className="contact-text">@anonymous10203040</p>
            </div>
          </div>


          <div className="contact-info">
            <i class="fa-solid fa-mobile-screen"></i>
            <div className="contact-double">
              <p className="contact-text">Personal:</p>
              <p className="contact-text">+998 (99) 6473762</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
