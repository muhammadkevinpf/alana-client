import React from "react";
import Logo from "../../images/logo-grey.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
function Subscribe() {
  return (
    <div className="footer p-2 text-center">
      <img src={Logo} alt="logo" />
      <div>
        <span>
          <a
            href="https://www.facebook.com/KlinikAlana"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/klinikalana/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            <FaInstagram />
          </a>
        </span>
        <span>
          <a
            href="https://wa.me/6282266888853"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            <FaWhatsapp className="kontol" />
          </a>
        </span>
        <br />
        <span>copyright © 2020. alana. all rights reserved.</span>
      </div>
    </div>
  );
}

export default Subscribe;
