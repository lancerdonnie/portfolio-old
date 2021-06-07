import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactbox">
        <div className="back"></div>
        <div className="svg">
          <p>
            Contact
            <br /> me
          </p>
        </div>
        <div className="msg">
          <div>
            <p>PHONE</p>
            <span>+2348118161237</span>
          </div>
          <div>
            <p>EMAIL</p>

            <span>
              <a href="mailto:jideadedejifirst@gmail.com">
                jideadedejifirst@gmail.com
              </a>
            </span>
          </div>
          <div>
            <p>SOCIALS</p>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://github.com/lancerdonnie"
              >
                <i className="fab fa-github social"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.linkedin.com/in/adedeji-babajide-2ba801166"
              >
                <i className="fab fa-linkedin social"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://twitter.com/lancer_donnie"
              >
                <i className="fab fa-twitter social"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
