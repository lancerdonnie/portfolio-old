import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div class='contact'>
      <div class='contactbox'>
        <div class='back'></div>
        <div className='svg'>
          <p>
            Contact
            <br /> me
          </p>
        </div>
        <div className='msg'>
          <div>
            <p>PHONE</p>
            <span>+2348118161237</span>
          </div>
          <div>
            <p>EMAIL</p>
            <span>jideadedejifirst@gmail.com</span>
          </div>
          <div>
            <p>SOCIALS</p>
            <div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://github.com/lancerdonnie'
              >
                <i className='fab fa-github social'></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://instagram.com/lancer_donnie'
              >
                <i className='fab fa-instagram social'></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://twitter.com/lancer_donnie'
              >
                <i className='fab fa-twitter social'></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://facebook.com/adedeji.ifeoluwa1'
              >
                <i className='fab fa-facebook-f social'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
