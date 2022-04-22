import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <section className='attributions'>
        <p>
          Challenge and materials provided by{" "}
          <a
            href='https://www.frontendmentor.io/home'
            target='_blank'
            rel='noopener noreferrer'
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Created using{" "}
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
